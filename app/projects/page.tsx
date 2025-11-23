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
        <ProjectsSkeleton />
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

function ProjectsSkeleton() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-block rounded-lg bg-gold-400/10 px-3 py-1 mb-4">
            <div className="h-4 w-20 bg-gold-400/30 rounded animate-pulse"></div>
          </div>
          <div className="h-12 w-96 max-w-full bg-gold-400/20 rounded-lg animate-pulse mb-4"></div>
          <div className="h-6 w-72 max-w-full bg-white/10 rounded animate-pulse mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-green-800/90 border border-green-700 rounded-2xl overflow-hidden h-full flex flex-col animate-pulse"
            >
              <div className="relative h-72 w-full bg-gradient-to-br from-green-700/50 to-green-600/30 flex items-center justify-center">
                <div className="w-12 h-12 bg-gold-400/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gold-400/30 rounded"></div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col space-y-3">
                <div className="h-6 bg-gold-400/20 rounded w-3/4"></div>
                
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6"></div>
                  <div className="h-4 bg-white/10 rounded w-4/6"></div>
                </div>
                
                <div className="h-4 bg-gold-400/20 rounded w-1/2 mt-2"></div>
                
                <div className="flex items-center mt-4 space-x-2">
                  <div className="h-4 bg-gold-400/30 rounded w-20"></div>
                  <div className="h-4 bg-gold-400/30 rounded w-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gold-400/70 text-sm">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gold-400/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-gold-400/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-gold-400/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            Loading projects...
          </div>
        </div>
      </div>
    </section>
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