import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { SiteContent } from '../../../types/cms';

interface ProjectsEditorProps {
  content: SiteContent;
  onChange: (content: SiteContent) => void;
}

const ProjectsEditor: React.FC<ProjectsEditorProps> = ({ content, onChange }) => {
  const statusOptions = ['Completed', 'In Progress', 'Planning', 'On Hold'];

  const handleProjectChange = (index: number, field: keyof SiteContent['projects'][0], value: any) => {
    const newProjects = [...content.projects];
    newProjects[index] = {
      ...newProjects[index],
      [field]: value
    };
    onChange({
      ...content,
      projects: newProjects
    });
  };

  const handleFeatureChange = (projectIndex: number, featureIndex: number, value: string) => {
    const newProjects = [...content.projects];
    const newFeatures = [...newProjects[projectIndex].features];
    newFeatures[featureIndex] = value;
    newProjects[projectIndex] = {
      ...newProjects[projectIndex],
      features: newFeatures
    };
    onChange({
      ...content,
      projects: newProjects
    });
  };

  const addProject = () => {
    const newProject = {
      id: `project-${Date.now()}`,
      title: '',
      location: '',
      units: 0,
      year: new Date().getFullYear().toString(),
      image: '',
      description: '',
      features: [''],
      status: 'Planning'
    };
    onChange({
      ...content,
      projects: [...content.projects, newProject]
    });
  };

  const removeProject = (index: number) => {
    const newProjects = content.projects.filter((_, i) => i !== index);
    onChange({
      ...content,
      projects: newProjects
    });
  };

  const addFeature = (projectIndex: number) => {
    const newProjects = [...content.projects];
    newProjects[projectIndex] = {
      ...newProjects[projectIndex],
      features: [...newProjects[projectIndex].features, '']
    };
    onChange({
      ...content,
      projects: newProjects
    });
  };

  const removeFeature = (projectIndex: number, featureIndex: number) => {
    const newProjects = [...content.projects];
    const newFeatures = newProjects[projectIndex].features.filter((_, i) => i !== featureIndex);
    newProjects[projectIndex] = {
      ...newProjects[projectIndex],
      features: newFeatures
    };
    onChange({
      ...content,
      projects: newProjects
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Projects Management</h2>
        <button
          onClick={addProject}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
        >
          <Plus className="w-5 h-5" />
          <span>Add Project</span>
        </button>
      </div>

      <div className="space-y-8">
        {content.projects.map((project, projectIndex) => (
          <div key={project.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Project {projectIndex + 1}</h3>
              <button
                onClick={() => removeProject(projectIndex)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => handleProjectChange(projectIndex, 'title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={project.location}
                    onChange={(e) => handleProjectChange(projectIndex, 'location', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter project location"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Units
                  </label>
                  <input
                    type="number"
                    value={project.units}
                    onChange={(e) => handleProjectChange(projectIndex, 'units', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <input
                    type="text"
                    value={project.year}
                    onChange={(e) => handleProjectChange(projectIndex, 'year', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={project.status}
                    onChange={(e) => handleProjectChange(projectIndex, 'status', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={project.image}
                  onChange={(e) => handleProjectChange(projectIndex, 'image', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://example.com/image.jpg"
                />
                {project.image && (
                  <div className="mt-4">
                    <img
                      src={project.image}
                      alt="Project preview"
                      className="w-full h-48 object-cover rounded-xl border border-gray-200"
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
                  value={project.description}
                  onChange={(e) => handleProjectChange(projectIndex, 'description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Enter project description"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Project Features
                  </label>
                  <button
                    onClick={() => addFeature(projectIndex)}
                    className="flex items-center space-x-2 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Feature</span>
                  </button>
                </div>
                
                <div className="space-y-3">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleFeatureChange(projectIndex, featureIndex, e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder={`Feature ${featureIndex + 1}`}
                      />
                      <button
                        onClick={() => removeFeature(projectIndex, featureIndex)}
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

      {content.projects.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
          <p className="text-gray-500 mb-4">No projects added yet</p>
          <button
            onClick={addProject}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            Add Your First Project
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsEditor;