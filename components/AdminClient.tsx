'use client';
import { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import ProjectForm from '@/components/ProjectForm';
import { Edit, Trash2, Plus, Image, Video } from 'lucide-react';

interface Project {
  _id: string;
  title: string;
  description: string;
  featuredImage?: string;
  duration?: string;
  images?: string[];
  videos?: string[];
  createdAt: string;
}

export default function AdminClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects', {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        fetchProjects(); 
      } else {
        alert('Error deleting project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Error deleting project');
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProject(null);
    fetchProjects(); 
  };

  return (
    <AdminLayout>
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto md:px-6 max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
           
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Project Management
            </h2>
            <p className="mt-4 max-w-[700px] text-white/70">
              Manage your projects and initiatives securely.
            </p>
          </div>

          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gold-400">
              Project Management
            </h3>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-6 py-3 rounded-lg transition-all duration-300 font-semibold transform hover:scale-105"
            >
              <Plus className="h-5 w-5" />
              Add New Project
            </button>
          </div>

          {/* Projects List */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-gold-400 border-t-transparent mx-auto mb-4"></div>
              <div className="text-gold-400 text-xl">Loading projects...</div>
            </div>
          ) : (
            <div className="bg-green-800/90 border border-green-700 rounded-2xl overflow-hidden">
              <div className="p-6">
                {projects.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-white/70 text-lg mb-4">No projects found.</div>
                    <button
                      onClick={() => setShowForm(true)}
                      className="bg-gold-500 hover:bg-gold-400 text-navy-950 px-6 py-3 rounded-lg transition-colors font-semibold"
                    >
                      Create Your First Project
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div
                        key={project._id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-green-700/50 rounded-lg border border-green-600 hover:border-gold-400/50 transition-colors"
                      >
                        <div className="flex-1 mb-4 sm:mb-0">
                          <div className="flex items-start gap-4">
                            {project.featuredImage && (
                              <img
                                src={project.featuredImage}
                                alt={project.title}
                                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                              />
                            )}
                            <div className="flex-1">
                              <h4 className="text-gold-300 font-semibold text-lg">{project.title}</h4>
                              <p className="text-white/70 text-sm line-clamp-2 mt-1">
                                {project.description}
                              </p>
                              <div className="md:flex items-center gap-4 mt-2 text-xs text-white/50">
                                {project.duration && (
                                  <span>Duration: {project.duration}</span>
                                )}
                                {project.images && project.images.length > 0 && (
                                  <span className="flex items-center gap-1">
                                    <Image className="h-3 w-3" />
                                    {project.images.length} images
                                  </span>
                                )}
                                {project.videos && project.videos.length > 0 && (
                                  <span className="flex items-center gap-1">
                                    <Video className="h-3 w-3" />
                                    {project.videos.length} videos
                                  </span>
                                )}
                                <span>
                                  Created: {new Date(project.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-20 sm:ml-4">
                          <button
                            onClick={() => handleEdit(project)}
                            className="flex items-center gap-2 px-4 py-2 text-gold-400 hover:bg-gold-400/20 rounded-lg transition-colors border border-gold-400/30"
                            title="Edit project"
                          >
                            <Edit className="h-4 w-4" />
                            <span className="hidden sm:inline">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(project._id)}
                            className="flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors border border-red-400/30"
                            title="Delete project"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="hidden sm:inline">Delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-green-900 border border-green-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <ProjectForm
              project={editingProject}
              onClose={handleFormClose}
              onSave={handleFormClose}
            />
          </div>
        </div>
      )}
    </AdminLayout>
  );
}