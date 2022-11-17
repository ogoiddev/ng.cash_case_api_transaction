/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | JsonWebTokenError,
  _req,
  res,
  _next,
) => {
  if (err instanceof JsonWebTokenError) { 
    return res.status(400).json({ message: err.message });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  // vamos usar a mensagem para acessar um erro do nosso catálogo
  // se a mensagem não for uma chave do nosso catálogo "mappedError" vai retornar undefined e não entrar no "if"
  const mappedError = errorCatalog[messageAsErrorType];
  
  if (mappedError) {
    const { httpStatus, error } = mappedError;
    return res.status(httpStatus).json({ error });
  }
  return res.status(500).json({ message: 'internal error' });
};

export default errorHandler;