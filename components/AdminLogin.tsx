'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', 
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = '/admin';
      } else {
        setError(data.error || 'Login failed');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-xl font-bold tracking-tighter text-gold-400 inline-block mb-4">
            Dr. Raji-Mustapha
          </Link>
          
          <h1 className="text-2xl font-bold text-white">Admin Login</h1>
          <p className="text-white/60 mt-2">Please enter your credentials to access the admin panel</p>
        </div>

        <div className="bg-green-800/90 border border-green-700 rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-gold-300 mb-2 font-medium">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-400 h-5 w-5" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full bg-green-700/50 border border-green-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                  placeholder="Enter your username"
                  autoComplete="username"
                />
              </div>
            </div>

            <div>
              <label className="block text-gold-300 mb-2 font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-400 h-5 w-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-green-700/50 border border-green-600 rounded-lg pl-10 pr-12 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold-500 hover:bg-gold-400 disabled:bg-gold-500/50 text-navy-950 font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-navy-950 border-t-transparent"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-green-700/50">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-white/70 hover:text-gold-400 transition-colors text-sm"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/40 text-xs">
            This area is restricted to authorized personnel only. All access is logged.
          </p>
        </div>
      </div>
    </div>
  );
}