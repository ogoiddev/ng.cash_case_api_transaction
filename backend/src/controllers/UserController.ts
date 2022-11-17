import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  constructor(private service: UserService) { }

  public saveNewUser = async (req: Request, res: Response) => {
    const { body } = req;
    
    const results = await this.service.saveNewUser(body);
    res.status(201).json(results);
  };
}