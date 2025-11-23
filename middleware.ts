import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/jwt';

const protectedRoutes = ['/api/admin'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route) && 
    !pathname.includes('/login') && 
    !pathname.includes('/check-auth')
  );

  if (isProtectedRoute) {
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      verifyToken(token);
    } catch (error) {
      return NextResponse.json(
        { message: 'Invalid or expired token', error },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*'
};