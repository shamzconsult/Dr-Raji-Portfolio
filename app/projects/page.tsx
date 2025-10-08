'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FolderOpen, ArrowLeft } from 'lucide-react';

interface Project {
  _id: string;
  title: string;
  description: string;
  featuredImage?: string;
  duration?: string;
  supportReceived?: string;
  outcome?: string;
  feedback?: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      
      if (!response.ok) {
        console.error('Failed to fetch projects:', response.status);
        setProjects([]);
        return;
      }
      
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        console.error('Expected array but got:', data);
        setProjects([]);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gold-400 border-t-transparent mx-auto mb-4"></div>
            <div className="text-gold-400 text-xl">Loading projects...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-block rounded-lg bg-gold-400/10 px-3 py-1 text-sm text-gold-400 mb-4">
              Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Previous Projects
            </h2>
            <div className="mt-4 max-w-[700px] text-white/70">
              Explore the impactful projects and initiatives undertaken throughout my career.
            </div>
          </div>

          {projects.length === 0 ? (
            <EmptyState />
          ) : (
            <ProjectsGrid projects={projects} />
          )}
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
          <Link href="/projects" className="text-gold-400 transition-colors">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="bg-green-800/50 border border-green-700 rounded-2xl p-12 max-w-md mx-auto">
        <FolderOpen className="h-16 w-16 text-gold-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gold-400 mb-2">No Projects Yet</h3>
        <p className="text-white/70 mb-6">
          Projects will be displayed here once they are added to the portfolio.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="bg-gold-500 hover:bg-gold-400 text-navy-950 px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </Link>
          <p className="text-white/50 text-sm">
            Check back later for updates
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {projects.map((project) => (
        <Link
          key={project._id}
          href={`/projects/${project._id}`}
          className="group"
        >
          <div className="bg-green-800/90 border border-green-700 rounded-2xl overflow-hidden hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
            {project.featuredImage && (
              <div className="relative h-72 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gold-400 mb-2 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-white/70 line-clamp-3 flex-1">
                {project.description}
              </p>
              {project.duration && (
                <p className="text-sm text-gold-300 mt-2">
                  Duration: {project.duration}
                </p>
              )}
              <div className="mt-4 flex items-center text-gold-400 text-sm group-hover:translate-x-1 transition-transform duration-300">
                Read more →
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}