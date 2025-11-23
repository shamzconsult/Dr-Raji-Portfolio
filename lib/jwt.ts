import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

if (!JWT_SECRET) {
  throw new Error('setup JWT_SECRET in environment variable');
}

export interface JWTPayload {
  userId: string;
  username: string;
  role: string;
}

export function generateToken(payload: Omit<JWTPayload, 'userId'> & { userId?: string }): string {
  return jwt.sign(
    { 
      ...payload, 
      userId: payload.userId || 'admin',
      role: payload.role || 'admin'
    }, 
    JWT_SECRET, 
    { 
      expiresIn: JWT_EXPIRES_IN,
      issuer: 'dr-raji-portfolio',
      audience: 'dr-raji-portfolio-admin'
    }
  );
}

export function verifyToken(token: string): JWTPayload {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: 'dr-raji-portfolio',
      audience: 'dr-raji-portfolio-admin'
    }) as JWTPayload;
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token expired');
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid token');
    }
    throw new Error('Token verification failed');
  }
}

export function decodeToken(token: string): JWTPayload | null {
  try {
    return jwt.decode(token) as JWTPayload;
  } catch {
    return null;
  }
}