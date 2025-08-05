import React from 'react';
import { SiteContent } from '../../../types/cms';

interface HeroEditorProps {
  content: SiteContent;
  onChange: (content: SiteContent) => void;
}

const HeroEditor: React.FC<HeroEditorProps> = ({ content, onChange }) => {
  const handleChange = (field: keyof SiteContent['hero'], value: string) => {
    onChange({
      ...content,
      hero: {
        ...content.hero,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Hero Section Content</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Title
            </label>
            <input
              type="text"
              value={content.hero.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter main title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subtitle
            </label>
            <input
              type="text"
              value={content.hero.subtitle}
              onChange={(e) => handleChange('subtitle', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter subtitle"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={content.hero.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Enter description"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary CTA Button Text
              </label>
              <input
                type="text"
                value={content.hero.ctaText}
                onChange={(e) => handleChange('ctaText', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="e.g., Get Free Quote"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secondary CTA Button Text
              </label>
              <input
                type="text"
                value={content.hero.ctaSecondaryText}
                onChange={(e) => handleChange('ctaSecondaryText', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="e.g., View Services"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Preview</h3>
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {content.hero.title}
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">
              {content.hero.subtitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {content.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg">
                {content.hero.ctaText}
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200">
                {content.hero.ctaSecondaryText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;