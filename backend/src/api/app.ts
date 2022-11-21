import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response } from 'express';
import errorHandler from '../middleware/errorMiddleware';
import appRoutes from '../routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use(appRoutes);

app.use(errorHandler);

app.use(express.static('public'));

app.use('/', (_req: Request, res: Response) =>
  res.json('Visite a documentação da API no endpoint /api/doc e bons estudos'));

export default app;