export enum ErrorTypes {
  EntityInvalid = 'EntityInvalid',
  EntityNotFound = 'EntityNotFound',
  UserAlreadyExists = 'UserAlreadyExists',
  InvalidPasswordBcrypt = 'InvalidPasswordBcrypt',
  InvalidTokenTypeOrEmpty = 'InvalidTokenTypeOrEmpty',
  TheSameUserTransfer = 'TheSameUserTransfer',
  InsufficientBalance = 'InsufficientBalance',
}

type ErrorResponseObject = {
  error: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityInvalid: {
    error: 'User info invalid',
    httpStatus: 404,
  },
  EntityNotFound: {
    error: 'User Not Found, maybe wrong ID',
    httpStatus: 404,
  },
  InvalidPasswordBcrypt: {
    error: 'Problem with password bcrypt',
    httpStatus: 400,
  },
  InvalidTokenTypeOrEmpty: {
    error: 'Problem with token',
    httpStatus: 400,
  },
  UserAlreadyExists: {
    error: 'Nome de usuário ja cadastrado, escolha outro nome por favor',
    httpStatus: 400,
  },
  TheSameUserTransfer: {
    error: 'Nao e possível transferir para o próprio usuário',
    httpStatus: 400,
  },
  InsufficientBalance: {
    error: 'Saldo Insuficiente',
    httpStatus: 403,
  },
  
};