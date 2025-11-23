import bcrypt from 'bcryptjs';
import { generateToken, verifyToken, JWTPayload } from './jwt';

const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME!,
  passwordHash: process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync(process.env.ADMIN_PASSWORD!, 12)
};

if (!process.env.ADMIN_PASSWORD_HASH && process.env.ADMIN_PASSWORD) {
  ADMIN_CREDENTIALS.passwordHash = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 12);
  console.log('Admin password hash initialized. Consider setting ADMIN_PASSWORD_HASH in environment variables.');
}

export async function verifyAdminCredentials(username: string, password: string): Promise<{ isValid: boolean; user: { username: string; role: string } }> {
  if (username !== ADMIN_CREDENTIALS.username) {
    return { isValid: false, user: { username: '', role: '' } };
  }

  const isPasswordValid = await bcrypt.compare(password, ADMIN_CREDENTIALS.passwordHash);
  
  return {
    isValid: isPasswordValid,
    user: {
      username: ADMIN_CREDENTIALS.username,
      role: 'admin'
    }
  };
}

export async function createAdminSession(username: string, role: string) {
  const token = generateToken({ username, role });
  
  return {
    token,
    user: { username, role }
  };
}

export function validateAdminToken(token: string): { isValid: boolean; user?: JWTPayload } {
  try {
    const decoded = verifyToken(token);
    return { isValid: true, user: decoded };
  } catch {
    return { isValid: false };
  }
}

// export interface AdminSession {
//   isLoggedIn: boolean;
//   username: string;
// }

// const ADMIN_CREDENTIALS = {
//   username: process.env.ADMIN_USERNAME,
//   password: process.env.ADMIN_PASSWORD
// };

// export async function verifyAdminCredentials(username: string, password: string): Promise<boolean> {
//   return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
// }