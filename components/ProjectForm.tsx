'use client';
import { useState } from 'react';
import { X, Upload, Image as ImageIcon, Video } from 'lucide-react';

interface Project {
  _id?: string;
  title: string;
  description: string;
  duration?: string;
  supportReceived?: string;
  outcome?: string;
  images?: string[];
  videos?: string[];
  feedback?: string;
  featuredImage?: string;
}

interface ProjectFormProps {
  project?: Project | null;
  onClose: () => void;
  onSave: () => void;
}

export default function ProjectForm({ project, onClose, onSave }: ProjectFormProps) {
  const [formData, setFormData] = useState<Partial<Project>>(
    project || {
      title: '',
      description: '',
      duration: '',
      supportReceived: '',
      outcome: '',
      feedback: '',
      images: [],
      videos: [],
      featuredImage: '',
    }
  );
  const [saving, setSaving] = useState(false);
  const [uploadingFeaturedImage, setUploadingFeaturedImage] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [uploadingVideos, setUploadingVideos] = useState(false);
  const [, setUploadProgress] = useState<{[key: string]: number}>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultipleFileUpload = async (files: FileList, type: 'image' | 'video') => {
    if (type === 'image') {
      setUploadingImages(true);
    } else {
      setUploadingVideos(true);
    }
    
    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
          credentials: 'include',
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Upload failed');
        }

        return data.url;
      });

      const urls = await Promise.all(uploadPromises);
      
      if (type === 'image') {
        setFormData((prev) => ({
          ...prev,
          images: [...(prev.images || []), ...urls],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          videos: [...(prev.videos || []), ...urls],
        }));
      }
      
    } catch (error) {
      console.error('Upload error:', error);
      alert('Some files failed to upload. Please try again.');
    } finally {
      if (type === 'image') {
        setUploadingImages(false);
      } else {
        setUploadingVideos(false);
      }
      setUploadProgress({});
    }
  };

  const handleFeaturedImageUpload = async (file: File) => {
    setUploadingFeaturedImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setFormData((prev) => ({ ...prev, featuredImage: data.url }));
      } else {
        alert('Upload failed: ' + data.error);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setUploadingFeaturedImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = project?._id 
        ? `/api/projects/${project._id}`
        : '/api/projects';
      
      const method = project?._id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      const result = await response.json();

      if (response.ok) {
        onSave();
      } else {
        const errorMessage = result.error || result.message || 'Unknown error occurred';
        alert(`Error saving project: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Error saving project');
    } finally {
      setSaving(false);
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images?.filter((_, i) => i !== index),
    }));
  };

  const removeVideo = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      videos: prev.videos?.filter((_, i) => i !== index),
    }));
  };

  const clearAllImages = () => {
    setFormData((prev) => ({
      ...prev,
      images: [],
    }));
  };

  const clearAllVideos = () => {
    setFormData((prev) => ({
      ...prev,
      videos: [],
    }));
  };

  const isAnyUploading = uploadingFeaturedImage || uploadingImages || uploadingVideos;

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gold-400">
          {project ? 'Edit Project' : 'Create New Project'}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="p-2 hover:bg-green-800 rounded-lg transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-gold-300 mb-2 font-semibold">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title || ''}
            onChange={handleInputChange}
            required
            className="w-full bg-green-800 border border-green-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400"
            placeholder="Enter project title"
          />
        </div>

        <div>
          <label className="block text-gold-300 mb-2 font-semibold">
            Description *
          </label>
          <textarea
            name="description"
            value={formData.description || ''}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full bg-green-800 border border-green-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 resize-vertical"
            placeholder="Enter project description"
          />
        </div>

        <div>
          <label className="block text-gold-300 mb-2">
            Duration
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration || ''}
            onChange={handleInputChange}
            className="w-full bg-green-800 border border-green-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400"
            placeholder="e.g., 6 months, 2020-2022"
          />
        </div>

        <div>
          <label className="block text-gold-300 mb-2">
            Support Received
          </label>
          <input
            type="text"
            name="supportReceived"
            value={formData.supportReceived || ''}
            onChange={handleInputChange}
            className="w-full bg-green-800 border border-green-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400"
            placeholder="Describe any support received"
          />
        </div>

        <div>
          <label className="block text-gold-300 mb-2">
            Outcome
          </label>
          <textarea
            name="outcome"
            value={formData.outcome || ''}
            onChange={handleInputChange}
            rows={3}
            className="w-full bg-green-800 border border-green-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 resize-vertical"
            placeholder="Describe the project outcomes"
          />
        </div>

        <div>
          <label className="block text-gold-300 mb-2">
            Feedback
          </label>
          <textarea
            name="feedback"
            value={formData.feedback || ''}
            onChange={handleInputChange}
            rows={3}
            className="w-full bg-green-800 border border-green-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 resize-vertical"
            placeholder="Any feedback received"
          />
        </div>

        <div>
          <label className="block text-gold-300 mb-2">
            Featured Image
          </label>
          {formData.featuredImage ? (
            <div className="flex items-center gap-4 mb-2">
              <img
                src={formData.featuredImage}
                alt="Featured"
                className="h-20 w-20 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, featuredImage: '' }))}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-green-600 rounded-lg p-4 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFeaturedImageUpload(file);
                }}
                disabled={uploadingFeaturedImage}
                className="hidden"
                id="featured-image"
              />
              <label
                htmlFor="featured-image"
                className={`cursor-pointer flex flex-col items-center gap-2 transition-colors ${
                  uploadingFeaturedImage 
                    ? 'text-white/40 cursor-not-allowed' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {uploadingFeaturedImage ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-gold-400 border-t-transparent"></div>
                    <span>Uploading Featured Image...</span>
                  </div>
                ) : (
                  <>
                    <ImageIcon className="h-8 w-8" />
                    <span>Upload Featured Image</span>
                  </>
                )}
              </label>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-gold-300">
              Additional Images
            </label>
            {formData.images && formData.images.length > 0 && (
              <button
                type="button"
                onClick={clearAllImages}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Clear All
              </button>
            )}
          </div>
          
          <div className="border-2 border-dashed border-green-600 rounded-lg p-4 text-center mb-4">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  handleMultipleFileUpload(files, 'image');
                }
              }}
              disabled={uploadingImages}
              className="hidden"
              id="additional-images"
            />
            <label
              htmlFor="additional-images"
              className={`cursor-pointer flex flex-col items-center gap-2 transition-colors ${
                uploadingImages 
                  ? 'text-white/40 cursor-not-allowed' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {uploadingImages ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-gold-400 border-t-transparent"></div>
                  <span>Uploading Images...</span>
                </div>
              ) : (
                <>
                  <Upload className="h-6 w-6" />
                  <span>Select Multiple Images</span>
                  <span className="text-white/50 text-xs">
                    Hold Ctrl/Cmd to select multiple files
                  </span>
                </>
              )}
            </label>
          </div>

          {formData.images && formData.images.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/70 text-sm">
                  {formData.images.length} image{formData.images.length !== 1 ? 's' : ''} selected
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="h-20 w-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-gold-300">
              Videos
            </label>
            {formData.videos && formData.videos.length > 0 && (
              <button
                type="button"
                onClick={clearAllVideos}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Clear All
              </button>
            )}
          </div>
          
          <div className="border-2 border-dashed border-green-600 rounded-lg p-4 text-center mb-4">
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  handleMultipleFileUpload(files, 'video');
                }
              }}
              disabled={uploadingVideos}
              className="hidden"
              id="videos"
            />
            <label
              htmlFor="videos"
              className={`cursor-pointer flex flex-col items-center gap-2 transition-colors ${
                uploadingVideos 
                  ? 'text-white/40 cursor-not-allowed' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {uploadingVideos ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-gold-400 border-t-transparent"></div>
                  <span>Uploading Videos...</span>
                </div>
              ) : (
                <>
                  <Video className="h-6 w-6" />
                  <span>Select Multiple Videos</span>
                  <span className="text-white/50 text-xs">
                    Hold Ctrl/Cmd to select multiple files
                  </span>
                </>
              )}
            </label>
          </div>

          {formData.videos && formData.videos.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/70 text-sm">
                  {formData.videos.length} video{formData.videos.length !== 1 ? 's' : ''} selected
                </span>
              </div>
              <div className="space-y-2">
                {formData.videos.map((video, index) => (
                  <div key={index} className="flex items-center justify-between bg-green-700/50 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Video className="h-4 w-4 text-gold-400" />
                      <span className="text-white/70 text-sm truncate max-w-xs">
                        Video {index + 1}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeVideo(index)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-green-700 hover:bg-green-600 text-white py-3 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving || isAnyUploading}
            className="flex-1 bg-gold-500 hover:bg-gold-400 text-navy-950 py-3 rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving...' : isAnyUploading ? 'Uploading...' : project ? 'Update Project' : 'Create Project'}
          </button>
        </div>
      </div>
    </form>
  );
}