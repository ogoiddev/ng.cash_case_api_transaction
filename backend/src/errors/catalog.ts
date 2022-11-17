export enum ErrorTypes {
  EntityInvalid = 'EntityInvalid',
  InvalidMongoId = 'InvalidMongoId',
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
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
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