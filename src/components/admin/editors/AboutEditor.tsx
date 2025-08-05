import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { SiteContent } from '../../../types/cms';

interface AboutEditorProps {
  content: SiteContent;
  onChange: (content: SiteContent) => void;
}

const AboutEditor: React.FC<AboutEditorProps> = ({ content, onChange }) => {
  const handleTitleChange = (value: string) => {
    onChange({
      ...content,
      about: {
        ...content.about,
        title: value
      }
    });
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const newDescriptions = [...content.about.description];
    newDescriptions[index] = value;
    onChange({
      ...content,
      about: {
        ...content.about,
        description: newDescriptions
      }
    });
  };

  const addDescription = () => {
    onChange({
      ...content,
      about: {
        ...content.about,
        description: [...content.about.description, '']
      }
    });
  };

  const removeDescription = (index: number) => {
    const newDescriptions = content.about.description.filter((_, i) => i !== index);
    onChange({
      ...content,
      about: {
        ...content.about,
        description: newDescriptions
      }
    });
  };

  const handleValueChange = (index: number, value: string) => {
    const newValues = [...content.about.values];
    newValues[index] = value;
    onChange({
      ...content,
      about: {
        ...content.about,
        values: newValues
      }
    });
  };

  const addValue = () => {
    onChange({
      ...content,
      about: {
        ...content.about,
        values: [...content.about.values, '']
      }
    });
  };

  const removeValue = (index: number) => {
    const newValues = content.about.values.filter((_, i) => i !== index);
    onChange({
      ...content,
      about: {
        ...content.about,
        values: newValues
      }
    });
  };

  const handleCredentialChange = (index: number, field: 'title' | 'description', value: string) => {
    const newCredentials = [...content.about.credentials];
    newCredentials[index] = {
      ...newCredentials[index],
      [field]: value
    };
    onChange({
      ...content,
      about: {
        ...content.about,
        credentials: newCredentials
      }
    });
  };

  const addCredential = () => {
    onChange({
      ...content,
      about: {
        ...content.about,
        credentials: [...content.about.credentials, { title: '', description: '' }]
      }
    });
  };

  const removeCredential = (index: number) => {
    const newCredentials = content.about.credentials.filter((_, i) => i !== index);
    onChange({
      ...content,
      about: {
        ...content.about,
        credentials: newCredentials
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">About Section Title</h3>
        <input
          type="text"
          value={content.about.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Enter about section title"
        />
      </div>

      {/* Description Paragraphs */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Description Paragraphs</h3>
          <button
            onClick={addDescription}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Paragraph</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {content.about.description.map((desc, index) => (
            <div key={index} className="flex items-start space-x-4">
              <textarea
                value={desc}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                rows={4}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder={`Paragraph ${index + 1}`}
              />
              <button
                onClick={() => removeDescription(index)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Company Values</h3>
          <button
            onClick={addValue}
            className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Value</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {content.about.values.map((value, index) => (
            <div key={index} className="flex items-center space-x-4">
              <input
                type="text"
                value={value}
                onChange={(e) => handleValueChange(index, e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder={`Value ${index + 1}`}
              />
              <button
                onClick={() => removeValue(index)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Credentials</h3>
          <button
            onClick={addCredential}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Credential</span>
          </button>
        </div>
        
        <div className="space-y-6">
          {content.about.credentials.map((credential, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Credential {index + 1}</h4>
                <button
                  onClick={() => removeCredential(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={credential.title}
                    onChange={(e) => handleCredentialChange(index, 'title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Credential title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={credential.description}
                    onChange={(e) => handleCredentialChange(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Credential description"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutEditor;