import React, { useState, useEffect } from 'react';
import { Github, TestTube, CheckCircle, XCircle, Save } from 'lucide-react';
import { CMSConfig } from '../../../types/cms';
import { CMSService } from '../../../services/cmsService';
import { GitHubService } from '../../../services/githubService';
import toast from 'react-hot-toast';

interface SettingsEditorProps {
  onConfigUpdate: (config: CMSConfig) => void;
  githubService: GitHubService | null;
}

const SettingsEditor: React.FC<SettingsEditorProps> = ({ onConfigUpdate, githubService }) => {
  const [config, setConfig] = useState<CMSConfig>({
    githubToken: '',
    githubRepo: '',
    githubOwner: '',
    branch: 'main'
  });
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const savedConfig = CMSService.getConfig();
    if (savedConfig) {
      setConfig(savedConfig);
    }
  }, []);

  const handleConfigChange = (field: keyof CMSConfig, value: string) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
    setConnectionStatus('idle');
  };

  const testConnection = async () => {
    if (!config.githubToken || !config.githubRepo || !config.githubOwner) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsTestingConnection(true);
    try {
      const testService = new GitHubService(config);
      const isConnected = await testService.testConnection();
      
      if (isConnected) {
        setConnectionStatus('success');
        toast.success('GitHub connection successful!');
      } else {
        setConnectionStatus('error');
        toast.error('GitHub connection failed. Please check your credentials.');
      }
    } catch (error) {
      setConnectionStatus('error');
      toast.error('GitHub connection failed. Please check your credentials.');
    } finally {
      setIsTestingConnection(false);
    }
  };

  const saveConfig = () => {
    if (!config.githubToken || !config.githubRepo || !config.githubOwner) {
      toast.error('Please fill in all required fields');
      return;
    }

    onConfigUpdate(config);
  };

  const clearConfig = () => {
    setConfig({
      githubToken: '',
      githubRepo: '',
      githubOwner: '',
      branch: 'main'
    });
    setConnectionStatus('idle');
    CMSService.clearAll();
    toast.success('Configuration cleared');
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <Github className="w-8 h-8 text-gray-700" />
          <div>
            <h3 className="text-2xl font-bold text-gray-900">GitHub Integration</h3>
            <p className="text-gray-600">Configure GitHub integration for automatic deployments</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GitHub Personal Access Token *
            </label>
            <input
              type="password"
              value={config.githubToken}
              onChange={(e) => handleConfigChange('githubToken', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            />
            <p className="text-sm text-gray-500 mt-2">
              Create a token at{' '}
              <a
                href="https://github.com/settings/tokens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Settings → Developer settings → Personal access tokens
              </a>
              <br />
              Required permissions: <code className="bg-gray-100 px-1 rounded">repo</code> (Full control of private repositories)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Repository Owner *
              </label>
              <input
                type="text"
                value={config.githubOwner}
                onChange={(e) => handleConfigChange('githubOwner', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your-username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Repository Name *
              </label>
              <input
                type="text"
                value={config.githubRepo}
                onChange={(e) => handleConfigChange('githubRepo', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your-repo-name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Branch
            </label>
            <input
              type="text"
              value={config.branch}
              onChange={(e) => handleConfigChange('branch', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="main"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={testConnection}
              disabled={isTestingConnection}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isTestingConnection ? (
                <TestTube className="w-5 h-5 animate-spin" />
              ) : (
                <TestTube className="w-5 h-5" />
              )}
              <span>{isTestingConnection ? 'Testing...' : 'Test Connection'}</span>
            </button>

            {connectionStatus === 'success' && (
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Connected</span>
              </div>
            )}

            {connectionStatus === 'error' && (
              <div className="flex items-center space-x-2 text-red-600">
                <XCircle className="w-5 h-5" />
                <span className="font-medium">Connection Failed</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
            <button
              onClick={saveConfig}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              <Save className="w-5 h-5" />
              <span>Save Configuration</span>
            </button>

            <button
              onClick={clearConfig}
              className="px-6 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors duration-200"
            >
              Clear Configuration
            </button>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
        <h4 className="text-xl font-bold text-blue-900 mb-4">Setup Instructions</h4>
        <div className="space-y-4 text-blue-800">
          <div>
            <h5 className="font-semibold mb-2">1. Create a GitHub Personal Access Token</h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)</li>
              <li>Click "Generate new token (classic)"</li>
              <li>Give it a descriptive name like "CMS Admin Panel"</li>
              <li>Select the <code className="bg-blue-100 px-1 rounded">repo</code> scope (Full control of private repositories)</li>
              <li>Click "Generate token" and copy the token</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-2">2. Configure Repository Details</h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Enter your GitHub username as the repository owner</li>
              <li>Enter your repository name (the one containing this website)</li>
              <li>Specify the branch (usually "main" or "master")</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-2">3. Test and Save</h5>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Click "Test Connection" to verify your settings</li>
              <li>If successful, click "Save Configuration"</li>
              <li>You can now publish changes directly to GitHub</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-4">Current Status</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">GitHub Integration</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              githubService ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {githubService ? 'Configured' : 'Not Configured'}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Auto-Deploy to Netlify</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              githubService ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {githubService ? 'Enabled' : 'Requires GitHub Setup'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsEditor;