'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  _id: string;
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

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchProject(params.id as string);
    }
  }, [params.id]);

  const fetchProject = async (id: string) => {
    try {
      const response = await fetch(`/api/projects/${id}`);
      const data = await response.json();
      setProject(data);
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white">
        <Header />
        <ProjectDetailSkeleton />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-gold-400 mb-4">Project not found</h1>
          <Link href="/projects" className="text-white/70 hover:text-gold-400 transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto md:px-6 max-w-4xl">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-gold-400 hover:text-gold-300 mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>

          <div className="bg-green-800/90 border border-green-700 rounded-2xl overflow-hidden">
            {project.featuredImage && (
              <div className="relative h-72 md:h-[500px] w-full">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gold-400 mb-4">
                {project.title}
              </h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.duration && (
                  <div className="mb-4">
                    <h3 className="text-gold-400 font-semibold mb-2">Duration</h3>
                    <p className="text-white/70">{project.duration}</p>
                  </div>
                )}

                {project.supportReceived && (
                  <div className="mb-4">
                    <h3 className="text-gold-400 font-semibold mb-2">Support Received</h3>
                    <p className="text-white/70">{project.supportReceived}</p>
                  </div>
                )}

                {project.outcome && (
                  <div className="mb-4">
                    <h3 className="text-gold-400 font-semibold mb-2">Outcome</h3>
                    <p className="text-white/70">{project.outcome}</p>
                  </div>
                )}

                {project.feedback && (
                  <div className="mb-4">
                    <h3 className="text-gold-400 font-semibold mb-2">Feedback</h3>
                    <p className="text-white/70">{project.feedback}</p>
                  </div>
                )}

                {/* Extra Images part */}
                {project.images && project.images.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-gold-400 font-semibold mb-4">Gallery</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {project.images.map((image, index) => (
                        <div key={index} className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Videoss */}
                {project.videos && project.videos.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-gold-400 font-semibold mb-4">Videos</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {project.videos.map((video, index) => (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                          <video
                            src={video}
                            controls
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-800/40 backdrop-blur-md bg-green-950/80">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <Link href="/" className="text-xl font-bold tracking-tighter text-gold-400">
          Dr. Raji-Mustapha
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="text-white/70 hover:text-gold-400 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-white/70 hover:text-gold-400 transition-colors">
            Projects
          </Link>
          
        </nav>
      </div>
    </header>
  );
}

function ProjectDetailSkeleton() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto md:px-6 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center text-gold-400/50 animate-pulse">
            <div className="w-4 h-4 bg-gold-400/30 rounded mr-2"></div>
            <div className="h-4 w-32 bg-gold-400/20 rounded"></div>
          </div>
        </div>

        <div className="bg-green-800/90 border border-green-700 rounded-2xl overflow-hidden animate-pulse">
          <div className="relative h-72 md:h-[500px] w-full bg-gradient-to-br from-green-700/50 to-green-600/30 flex items-center justify-center">
            <div className="w-16 h-16 bg-gold-400/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gold-400/30 rounded"></div>
            </div>
          </div>


          <div className="p-6 md:p-8">

            <div className="mb-6">
              <div className="h-8 bg-gold-400/20 rounded w-3/4 mb-2"></div>
              <div className="h-8 bg-gold-400/20 rounded w-1/2"></div>
            </div>


            <div className="space-y-3 mb-8">
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-5/6"></div>
              <div className="h-4 bg-white/10 rounded w-4/6"></div>
              <div className="h-4 bg-white/10 rounded w-3/4"></div>
            </div>


            <div className="space-y-6">

              <div>
                <div className="h-5 bg-gold-400/20 rounded w-24 mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-32"></div>
              </div>

              <div>
                <div className="h-5 bg-gold-400/20 rounded w-36 mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-48"></div>
              </div>

              <div>
                <div className="h-5 bg-gold-400/20 rounded w-20 mb-2"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6"></div>
                </div>
              </div>

              <div>
                <div className="h-5 bg-gold-400/20 rounded w-24 mb-2"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-4/6"></div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="h-6 bg-gold-400/20 rounded w-20 mb-4"></div>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-green-700/40 to-green-600/20 flex items-center justify-center"
                  >
                    <div className="w-8 h-8 bg-gold-400/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gold-400/30 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="h-6 bg-gold-400/20 rounded w-16 mb-4"></div>
              <div className="grid grid-cols-1 gap-4">
                {[...Array(2)].map((_, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-green-700/40 to-green-600/20 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 bg-gold-400/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-gold-400/30 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-3 text-gold-400/60 text-sm">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gold-400/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-gold-400/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-gold-400/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            Loading project details...
          </div>
        </div>
      </div>
    </section>
  );
}