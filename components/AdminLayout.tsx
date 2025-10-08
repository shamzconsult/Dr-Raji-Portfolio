'use client';
import { useState } from 'react';
import Link from 'next/link';
import { LogOut, AlertCircle } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [tokenExpiryWarning, ] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { 
        method: 'POST',
        credentials: 'include'
      });
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const refreshToken = async () => {
    handleLogout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white">
      {tokenExpiryWarning && (
        <div className="bg-yellow-500/20 border border-yellow-500/50 text-yellow-200 px-4 py-3">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>Your session will expire soon. Please save your work.</span>
            </div>
            <button
              onClick={refreshToken}
              className="text-yellow-300 hover:text-yellow-200 underline text-sm"
            >
              Renew Session
            </button>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 border-b border-green-800/40 backdrop-blur-md bg-green-950/80">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold tracking-tighter text-gold-400">
              Dr. Raji-Mustapha
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="text-white/70 hover:text-gold-400 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-white/70 hover:text-gold-400 transition-colors">
                Projects
              </Link>
            </nav>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-white/70 hover:text-red-400 transition-colors text-sm border border-red-400/30 hover:bg-red-400/10 px-3 py-2 rounded-lg"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}