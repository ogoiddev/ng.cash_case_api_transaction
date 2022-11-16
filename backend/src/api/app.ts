import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use('/', (_req: Request, res: Response) =>
  res.json('Visite a documentação da API no endpoint /api/doc e bons estudos'));

export default app;