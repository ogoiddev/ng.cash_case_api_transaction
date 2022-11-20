import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  constructor(private service: UserService) { }

  public saveNewUser = async (req: Request, res: Response) => {
    const { body } = req;
    
    const results = await this.service
      .saveNewUser({ ...body, user_name: body.userName });
    res.status(201).json(results);
  };

  public getAllUsers = async (req: Request, res: Response) => {
    const token = req.headers.authorization || '';

    const results = await this.service.getAllUsers(token);
    res.status(200).json(results);
  };

  public getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const results = await this.service.getUserById(id);
    res.status(200).json(results);
  };
  
  public getUserByUserName = async (req: Request, res: Response) => { 
    const { name } = req.query;
    
    const results = await this.service.getUserByUserName(name as string);
    res.status(200).json(results);
  };
}