import { redirect } from 'next/navigation';
import { getAuthenticatedUser } from '@/lib/cookies';
import AdminClient from '@/components/AdminClient';

export default async function AdminPage() {
  const user = await getAuthenticatedUser();
  
  if (!user) {
    redirect('/admin/login');
  }

  return <AdminClient />;
}