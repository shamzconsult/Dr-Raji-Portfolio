import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminCredentials, createAdminSession } from '@/lib/auth';
import { setAuthCookie } from '@/lib/cookies';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    const { isValid, user } = await verifyAdminCredentials(username, password);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const session = await createAdminSession(user.username, user.role);
    
    await setAuthCookie(session.token);

    return NextResponse.json({
      success: true,
      user: session.user
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}