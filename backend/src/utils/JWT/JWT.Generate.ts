import jwt from 'jsonwebtoken';

interface IUserToken {
  id: string;
  'user_name': string;
  'account_id': string
}
class JWT {
  static createToken(user: IUserToken) {
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET 
      || 'jwt_secret', {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  }
}

export default JWT;
