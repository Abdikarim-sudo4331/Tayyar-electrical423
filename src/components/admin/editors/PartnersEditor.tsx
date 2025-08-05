import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { SiteContent } from '../../../types/cms';

interface PartnersEditorProps {
  content: SiteContent;
  onChange: (content: SiteContent) => void;
}

const PartnersEditor: React.FC<PartnersEditorProps> = ({ content, onChange }) => {
  const handlePartnerChange = (index: number, field: keyof SiteContent['partners'][0], value: string) => {
    const newPartners = [...content.partners];
    newPartners[index] = {
      ...newPartners[index],
      [field]: value
    };
    onChange({
      ...content,
      partners: newPartners
    });
  };

  const addPartner = () => {
    const newPartner = {
      id: `partner-${Date.now()}`,
      name: '',
      logo: '',
      description: ''
    };
    onChange({
      ...content,
      partners: [...content.partners, newPartner]
    });
  };

  const removePartner = (index: number) => {
    const newPartners = content.partners.filter((_, i) => i !== index);
    onChange({
      ...content,
      partners: newPartners
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Partners Management</h2>
        <button
          onClick={addPartner}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
        >
          <Plus className="w-5 h-5" />
          <span>Add Partner</span>
        </button>
      </div>

      <div className="space-y-8">
        {content.partners.map((partner, partnerIndex) => (
          <div key={partner.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Partner {partnerIndex + 1}</h3>
              <button
                onClick={() => removePartner(partnerIndex)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partner Name
                </label>
                <input
                  type="text"
                  value={partner.name}
                  onChange={(e) => handlePartnerChange(partnerIndex, 'name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter partner name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo URL
                </label>
                <input
                  type="url"
                  value={partner.logo}
                  onChange={(e) => handlePartnerChange(partnerIndex, 'logo', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://example.com/logo.png or /local-logo.png"
                />
                {partner.logo && (
                  <div className="mt-4">
                    <img
                      src={partner.logo}
                      alt="Partner logo preview"
                      className="w-48 h-32 object-contain bg-gray-50 rounded-xl border border-gray-200 p-4"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={partner.description}
                  onChange={(e) => handlePartnerChange(partnerIndex, 'description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Enter partner description"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {content.partners.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
          <p className="text-gray-500 mb-4">No partners added yet</p>
          <button
            onClick={addPartner}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            Add Your First Partner
          </button>
        </div>
      )}

      {/* Partnership Benefits Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Benefits</h3>
        <p className="text-gray-600 mb-4">
          This section displays the benefits of your partnerships. The content is currently static but can be made editable in future updates.
        </p>
        <div className="bg-gray-50 p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white">🏆</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">Partnerships with industry-leading manufacturers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white">🌍</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Global Standards</h4>
              <p className="text-gray-600 text-sm">Access to international best practices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersEditor;