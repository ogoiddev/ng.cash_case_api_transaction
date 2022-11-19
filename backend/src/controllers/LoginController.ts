import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private service: LoginService) { }

  public login = async (req: Request, res: Response) => {
    const { body } = req;
    
    const results = await this.service
      .login({ ...body, user_name: body.userName });
    res.status(200).json(results);
  };

  public loginValidate = async (req: Request, res: Response) => {
    const authorization = req.headers.authorization || '';

    const results = await this.service.loginValidate(authorization);
    res.status(200).json(results);
  };
}