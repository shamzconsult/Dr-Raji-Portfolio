import { NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/cookies';

export async function GET() {
  try {
    const user = await getAuthenticatedUser();
    
    return NextResponse.json({ 
      isAuthenticated: !!user,
      user: user || null
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({ 
      isAuthenticated: false,
      user: null
    });
  }
}