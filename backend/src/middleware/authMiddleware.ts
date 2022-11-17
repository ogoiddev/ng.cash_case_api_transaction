import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import ValidateJWT from '../utils/JWT/JWT.Validate';

class AuthMiddleware {
  static userModel: any;

  static checkAuth(req: Request, _res: Response, next: NextFunction) {
    const requestAuth = req.headers.authorization;
    
    if (typeof requestAuth === 'string') {
      const userData = ValidateJWT.validateToken(requestAuth);
      
      if (!isValidObjectId(userData.data._id)) {
        throw Error(ErrorTypes.InvalidMongoId);
      }
    } else {
      throw Error(ErrorTypes.InvalidTokenTypeOrEmpty);
    }

    next();
  }
}

export default AuthMiddleware;