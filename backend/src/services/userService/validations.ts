import { validate } from 'class-validator';
import { ErrorTypes } from '../../errors/catalog';
import User from '../../database/entities/User';

export default class Validate {
  static async newUser(setUserDataObj: User) {
    const errors = await validate(setUserDataObj);
    console.log('Erro ao validar UserDataOjt >>>', errors);
    
    if (errors.length) {
      throw Error(ErrorTypes.EntityInvalid);
    }
  }
}