import jwt from 'jsonwebtoken';
import User from '../../database/entities/User';

class JWT {
  static createToken(user: Omit<User, 'password'>) {
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET 
      || 'jwt_secret', {
      expiresIn: '14d',
      algorithm: 'HS256',
    });
    return token;
  }
}

export default JWT;
