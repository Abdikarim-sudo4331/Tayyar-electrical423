import { Octokit } from '@octokit/rest';
import { SiteContent, CMSConfig } from '../types/cms';
import yaml from 'js-yaml';

export class GitHubService {
  private octokit: Octokit;
  private config: CMSConfig;

  constructor(config: CMSConfig) {
    this.config = config;
    this.octokit = new Octokit({
      auth: config.githubToken,
    });
  }

  async updateSiteContent(content: SiteContent, commitMessage: string = 'Update site content via CMS'): Promise<void> {
    try {
      // Get the current file to get its SHA
      const currentFile = await this.octokit.rest.repos.getContent({
        owner: this.config.githubOwner,
        repo: this.config.githubRepo,
        path: 'src/data/siteContent.ts',
        ref: this.config.branch,
      });

      // Generate the new file content
      const newContent = this.generateContentFile(content);
      const encodedContent = Buffer.from(newContent).toString('base64');

      // Update the file
      await this.octokit.rest.repos.createOrUpdateFileContents({
        owner: this.config.githubOwner,
        repo: this.config.githubRepo,
        path: 'src/data/siteContent.ts',
        message: commitMessage,
        content: encodedContent,
        sha: Array.isArray(currentFile.data) ? undefined : currentFile.data.sha,
        branch: this.config.branch,
      });

      console.log('Successfully updated site content on GitHub');
    } catch (error) {
      console.error('Error updating GitHub:', error);
      throw new Error('Failed to update GitHub repository');
    }
  }

  private generateContentFile(content: SiteContent): string {
    return `import { SiteContent } from '../types/cms';

export const defaultSiteContent: SiteContent = ${JSON.stringify(content, null, 2)};`;
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.octokit.rest.repos.get({
        owner: this.config.githubOwner,
        repo: this.config.githubRepo,
      });
      return true;
    } catch (error) {
      console.error('GitHub connection test failed:', error);
      return false;
    }
  }

  async getCommitHistory(limit: number = 10): Promise<Array<{ sha: string; message: string; date: string; author: string }>> {
    try {
      const response = await this.octokit.rest.repos.listCommits({
        owner: this.config.githubOwner,
        repo: this.config.githubRepo,
        per_page: limit,
        path: 'src/data/siteContent.ts',
      });

      return response.data.map(commit => ({
        sha: commit.sha.substring(0, 7),
        message: commit.commit.message,
        date: commit.commit.author?.date || '',
        author: commit.commit.author?.name || 'Unknown',
      }));
    } catch (error) {
      console.error('Error fetching commit history:', error);
      return [];
    }
  }
}