import { NextFunction, Request, Response } from 'express';
import { ErrorTypes } from '../errors/catalog';
import ValidateJWT from '../utils/JWT/JWT.Validate';

class AuthMiddleware {
  static checkAuth(req: Request, _res: Response, next: NextFunction) {
    const requestAuth = req.headers.authorization;
    
    if (typeof requestAuth === 'string') {
      ValidateJWT.validateToken(requestAuth);
    } else {
      throw Error(ErrorTypes.InvalidTokenTypeOrEmpty);
    }

    next();
  }
}

export default AuthMiddleware;