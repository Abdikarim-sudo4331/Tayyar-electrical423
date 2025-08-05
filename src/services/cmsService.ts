import { SiteContent } from '../types/cms';
import { defaultSiteContent } from '../data/siteContent';

export class CMSService {
  private static readonly STORAGE_KEY = 'tayyar_cms_content';
  private static readonly CONFIG_KEY = 'tayyar_cms_config';

  static getSiteContent(): SiteContent {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading stored content:', error);
    }
    return defaultSiteContent;
  }

  static saveSiteContent(content: SiteContent): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(content));
    } catch (error) {
      console.error('Error saving content:', error);
      throw new Error('Failed to save content locally');
    }
  }

  static getConfig() {
    try {
      const stored = localStorage.getItem(this.CONFIG_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading config:', error);
    }
    return null;
  }

  static saveConfig(config: any): void {
    try {
      localStorage.setItem(this.CONFIG_KEY, JSON.stringify(config));
    } catch (error) {
      console.error('Error saving config:', error);
      throw new Error('Failed to save configuration');
    }
  }

  static clearAll(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.CONFIG_KEY);
  }
}