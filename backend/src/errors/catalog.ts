export enum ErrorTypes {
  EntityInvalid = 'EntityInvalid',
  EntityNotFound = 'EntityNotFound',
  InvalidPasswordBcrypt = 'InvalidPasswordBcrypt',
  InvalidTokenTypeOrEmpty = 'InvalidTokenTypeOrEmpty',
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
  
};