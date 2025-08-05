import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Settings, 
  FileText, 
  Users, 
  Briefcase, 
  Phone, 
  Handshake,
  LogOut,
  Save,
  Upload,
  Github,
  Activity,
  AlertCircle
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { SiteContent, CMSConfig } from '../../types/cms';
import { CMSService } from '../../services/cmsService';
import { GitHubService } from '../../services/githubService';
import HeroEditor from './editors/HeroEditor';
import AboutEditor from './editors/AboutEditor';
import ServicesEditor from './editors/ServicesEditor';
import ProjectsEditor from './editors/ProjectsEditor';
import ContactEditor from './editors/ContactEditor';
import PartnersEditor from './editors/PartnersEditor';
import SettingsEditor from './editors/SettingsEditor';

interface AdminDashboardProps {
  onLogout: () => void;
}

type TabType = 'hero' | 'about' | 'services' | 'projects' | 'contact' | 'partners' | 'settings';

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<TabType>('hero');
  const [siteContent, setSiteContent] = useState<SiteContent>(CMSService.getSiteContent());
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [githubService, setGithubService] = useState<GitHubService | null>(null);
  const [commitHistory, setCommitHistory] = useState<any[]>([]);

  const tabs = [
    { id: 'hero' as TabType, name: 'Hero Section', icon: Home },
    { id: 'about' as TabType, name: 'About', icon: FileText },
    { id: 'services' as TabType, name: 'Services', icon: Briefcase },
    { id: 'projects' as TabType, name: 'Projects', icon: Users },
    { id: 'contact' as TabType, name: 'Contact', icon: Phone },
    { id: 'partners' as TabType, name: 'Partners', icon: Handshake },
    { id: 'settings' as TabType, name: 'Settings', icon: Settings },
  ];

  useEffect(() => {
    const config = CMSService.getConfig();
    if (config && config.githubToken) {
      const service = new GitHubService(config);
      setGithubService(service);
      loadCommitHistory(service);
    }
  }, []);

  const loadCommitHistory = async (service: GitHubService) => {
    try {
      const history = await service.getCommitHistory(5);
      setCommitHistory(history);
    } catch (error) {
      console.error('Failed to load commit history:', error);
    }
  };

  const handleContentChange = (newContent: SiteContent) => {
    setSiteContent(newContent);
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    try {
      CMSService.saveSiteContent(siteContent);
      setHasUnsavedChanges(false);
      toast.success('Changes saved locally!');
    } catch (error) {
      toast.error('Failed to save changes');
    }
  };

  const handlePublish = async () => {
    if (!githubService) {
      toast.error('GitHub integration not configured. Please check settings.');
      return;
    }

    setIsPublishing(true);
    try {
      // Save locally first
      CMSService.saveSiteContent(siteContent);
      
      // Push to GitHub
      await githubService.updateSiteContent(siteContent, 'Update site content via CMS Admin Panel');
      
      setHasUnsavedChanges(false);
      toast.success('Site published successfully! Netlify will deploy the changes shortly.');
      
      // Reload commit history
      loadCommitHistory(githubService);
    } catch (error) {
      console.error('Publish error:', error);
      toast.error('Failed to publish changes. Please check your GitHub configuration.');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleConfigUpdate = (config: CMSConfig) => {
    CMSService.saveConfig(config);
    const service = new GitHubService(config);
    setGithubService(service);
    loadCommitHistory(service);
    toast.success('Configuration updated!');
  };

  const renderEditor = () => {
    switch (activeTab) {
      case 'hero':
        return <HeroEditor content={siteContent} onChange={handleContentChange} />;
      case 'about':
        return <AboutEditor content={siteContent} onChange={handleContentChange} />;
      case 'services':
        return <ServicesEditor content={siteContent} onChange={handleContentChange} />;
      case 'projects':
        return <ProjectsEditor content={siteContent} onChange={handleContentChange} />;
      case 'contact':
        return <ContactEditor content={siteContent} onChange={handleContentChange} />;
      case 'partners':
        return <PartnersEditor content={siteContent} onChange={handleContentChange} />;
      case 'settings':
        return <SettingsEditor onConfigUpdate={handleConfigUpdate} githubService={githubService} />;
      default:
        return <div>Select a section to edit</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">CMS Admin</h1>
          <p className="text-sm text-gray-600">Content Management</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Commit History */}
        {commitHistory.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              Recent Updates
            </h3>
            <div className="space-y-2">
              {commitHistory.slice(0, 3).map((commit) => (
                <div key={commit.sha} className="text-xs bg-gray-50 rounded p-2">
                  <div className="font-mono text-gray-600">#{commit.sha}</div>
                  <div className="text-gray-800 truncate">{commit.message}</div>
                  <div className="text-gray-500">{new Date(commit.date).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {tabs.find(tab => tab.id === activeTab)?.name}
              </h2>
              <p className="text-gray-600">Manage your website content</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {hasUnsavedChanges && (
                <div className="flex items-center space-x-2 text-orange-600 bg-orange-50 px-3 py-2 rounded-lg">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Unsaved changes</span>
                </div>
              )}
              
              <button
                onClick={handleSave}
                disabled={!hasUnsavedChanges}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
              
              <button
                onClick={handlePublish}
                disabled={isPublishing || !githubService}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPublishing ? (
                  <Upload className="w-4 h-4 animate-spin" />
                ) : (
                  <Github className="w-4 h-4" />
                )}
                <span>{isPublishing ? 'Publishing...' : 'Publish'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Editor Content */}
        <main className="flex-1 p-6 overflow-auto">
          {renderEditor()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;