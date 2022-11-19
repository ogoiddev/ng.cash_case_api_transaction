import { Request, Response } from 'express';
import TransactionService from '../services/transactionService';

export default class UserController {
  constructor(private service: TransactionService) { }

  public newTransaction = async (req: Request, res: Response) => {
    const token = req.headers.authorization || '';
    const { body } = req;
    
    const results = await this.service.newTransaction(token, body);
    res.status(201).json(results);
  };
}