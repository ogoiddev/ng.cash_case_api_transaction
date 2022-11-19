import { JwtPayload, verify } from 'jsonwebtoken';
import User from '../../database/entities/User';

class ValidateJWT {
  static validateToken(token: string) {
    const data = verify(token, process.env.JWT_SECRET 
      || 'jwt_secret') as JwtPayload;
    
    return data.data as User;
  }
}

export default ValidateJWT;
