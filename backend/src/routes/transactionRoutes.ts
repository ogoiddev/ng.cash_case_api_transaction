import { Router } from 'express';
import AuthMiddleware from '../middleware/authMiddleware';
import factory from '../factories/index';

const transactionRoute = Router();

transactionRoute.patch(
  '/', 
  AuthMiddleware.checkAuth,
  factory.transactionHandler.newTransaction,
);

export default transactionRoute;