import { cookies } from 'next/headers';

const COOKIE_NAME = 'admin-token';
const MAX_AGE = 60 * 60 * 24;

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: MAX_AGE,
    path: '/',
  });
}

export async function getAuthCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value;
}

export async function deleteAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getAuthenticatedUser() {
  const token = await getAuthCookie();
  
  if (!token) {
    return null;
  }

  try {
    const { verifyToken } = await import('./jwt');
    const user = verifyToken(token);
    return user;
  } catch {
    return null;
  }
}