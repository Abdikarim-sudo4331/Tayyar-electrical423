import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { SiteContent } from '../../../types/cms';

interface ServicesEditorProps {
  content: SiteContent;
  onChange: (content: SiteContent) => void;
}

const ServicesEditor: React.FC<ServicesEditorProps> = ({ content, onChange }) => {
  const colorOptions = [
    { value: 'blue', label: 'Blue', class: 'bg-blue-500' },
    { value: 'green', label: 'Green', class: 'bg-green-500' },
    { value: 'orange', label: 'Orange', class: 'bg-orange-500' },
    { value: 'purple', label: 'Purple', class: 'bg-purple-500' },
    { value: 'red', label: 'Red', class: 'bg-red-500' },
    { value: 'yellow', label: 'Yellow', class: 'bg-yellow-500' },
  ];

  const handleServiceChange = (index: number, field: keyof SiteContent['services'][0], value: any) => {
    const newServices = [...content.services];
    newServices[index] = {
      ...newServices[index],
      [field]: value
    };
    onChange({
      ...content,
      services: newServices
    });
  };

  const handleFeatureChange = (serviceIndex: number, featureIndex: number, value: string) => {
    const newServices = [...content.services];
    const newFeatures = [...newServices[serviceIndex].features];
    newFeatures[featureIndex] = value;
    newServices[serviceIndex] = {
      ...newServices[serviceIndex],
      features: newFeatures
    };
    onChange({
      ...content,
      services: newServices
    });
  };

  const addService = () => {
    const newService = {
      id: `service-${Date.now()}`,
      title: '',
      description: '',
      features: [''],
      color: 'blue'
    };
    onChange({
      ...content,
      services: [...content.services, newService]
    });
  };

  const removeService = (index: number) => {
    const newServices = content.services.filter((_, i) => i !== index);
    onChange({
      ...content,
      services: newServices
    });
  };

  const addFeature = (serviceIndex: number) => {
    const newServices = [...content.services];
    newServices[serviceIndex] = {
      ...newServices[serviceIndex],
      features: [...newServices[serviceIndex].features, '']
    };
    onChange({
      ...content,
      services: newServices
    });
  };

  const removeFeature = (serviceIndex: number, featureIndex: number) => {
    const newServices = [...content.services];
    const newFeatures = newServices[serviceIndex].features.filter((_, i) => i !== featureIndex);
    newServices[serviceIndex] = {
      ...newServices[serviceIndex],
      features: newFeatures
    };
    onChange({
      ...content,
      services: newServices
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Services Management</h2>
        <button
          onClick={addService}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
        >
          <Plus className="w-5 h-5" />
          <span>Add Service</span>
        </button>
      </div>

      <div className="space-y-8">
        {content.services.map((service, serviceIndex) => (
          <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Service {serviceIndex + 1}</h3>
              <button
                onClick={() => removeService(serviceIndex)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Title
                  </label>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => handleServiceChange(serviceIndex, 'title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter service title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color Theme
                  </label>
                  <div className="flex space-x-2">
                    {colorOptions.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => handleServiceChange(serviceIndex, 'color', color.value)}
                        className={`w-8 h-8 rounded-full ${color.class} ${
                          service.color === color.value ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                        }`}
                        title={color.label}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={service.description}
                  onChange={(e) => handleServiceChange(serviceIndex, 'description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Enter service description"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Features
                  </label>
                  <button
                    onClick={() => addFeature(serviceIndex)}
                    className="flex items-center space-x-2 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Feature</span>
                  </button>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleFeatureChange(serviceIndex, featureIndex, e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder={`Feature ${featureIndex + 1}`}
                      />
                      <button
                        onClick={() => removeFeature(serviceIndex, featureIndex)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {content.services.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
          <p className="text-gray-500 mb-4">No services added yet</p>
          <button
            onClick={addService}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            Add Your First Service
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesEditor;