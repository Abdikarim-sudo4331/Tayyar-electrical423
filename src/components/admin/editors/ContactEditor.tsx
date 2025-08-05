import React from 'react';
import { SiteContent } from '../../../types/cms';

interface ContactEditorProps {
  content: SiteContent;
  onChange: (content: SiteContent) => void;
}

const ContactEditor: React.FC<ContactEditorProps> = ({ content, onChange }) => {
  const handleChange = (field: keyof SiteContent['contact'], value: string | boolean) => {
    onChange({
      ...content,
      contact: {
        ...content.contact,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={content.contact.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="+254 768 817662"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={content.contact.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="info@tayyarelectricals.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Address
            </label>
            <textarea
              value={content.contact.address}
              onChange={(e) => handleChange('address', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Al Falaq Building S1 3rd Street, Eastleigh Nairobi Kenya"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Hours
            </label>
            <input
              type="text"
              value={content.contact.businessHours}
              onChange={(e) => handleChange('businessHours', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Mon-Fri: 7AM-6PM"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="emergencyAvailable"
              checked={content.contact.emergencyAvailable}
              onChange={(e) => handleChange('emergencyAvailable', e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="emergencyAvailable" className="text-sm font-medium text-gray-700">
              24/7 Emergency Service Available
            </label>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={content.company.name}
                onChange={(e) => onChange({
                  ...content,
                  company: {
                    ...content.company,
                    name: e.target.value
                  }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Tayyar Electricals"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tagline
              </label>
              <input
                type="text"
                value={content.company.tagline}
                onChange={(e) => onChange({
                  ...content,
                  company: {
                    ...content.company,
                    tagline: e.target.value
                  }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Professional Electrical Services"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Logo URL
            </label>
            <input
              type="url"
              value={content.company.logo}
              onChange={(e) => onChange({
                ...content,
                company: {
                  ...content.company,
                  logo: e.target.value
                }
              })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="/Tayyar logo.jpg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Facebook URL
              </label>
              <input
                type="url"
                value={content.company.socialMedia.facebook}
                onChange={(e) => onChange({
                  ...content,
                  company: {
                    ...content.company,
                    socialMedia: {
                      ...content.company.socialMedia,
                      facebook: e.target.value
                    }
                  }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="https://web.facebook.com/Tayyar.elecric"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={content.company.socialMedia.linkedin}
                onChange={(e) => onChange({
                  ...content,
                  company: {
                    ...content.company,
                    socialMedia: {
                      ...content.company.socialMedia,
                      linkedin: e.target.value
                    }
                  }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="https://www.linkedin.com/in/tayyar-electricals-623008259/"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Preview</h3>
        <div className="bg-gray-50 p-6 rounded-xl">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📞</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Phone</div>
                <div className="text-blue-600">{content.contact.phone}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">✉️</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-green-600">{content.contact.email}</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📍</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Address</div>
                <div className="text-purple-600">{content.contact.address}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🕒</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Business Hours</div>
                <div className="text-orange-600">{content.contact.businessHours}</div>
                {content.contact.emergencyAvailable && (
                  <div className="text-sm text-red-600 font-medium">Emergency service available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEditor;