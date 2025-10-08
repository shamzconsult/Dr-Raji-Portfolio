import { redirect } from 'next/navigation';
import { getAuthenticatedUser } from './cookies';

export async function requireAuth() {
  const user = await getAuthenticatedUser();
  
  if (!user) {
    redirect('/admin');
  }
  
  return user;
}

export async function getSession() {
  return await getAuthenticatedUser();
}