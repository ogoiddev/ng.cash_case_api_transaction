import { validate } from 'class-validator';
import User from '../../database/entities/User';

export default class Validate {
  static async newUser(setUserDataObj: User) {
    const errors = await validate(setUserDataObj);
    
    if (errors.length) {
      console.log(errors);
      
      throw new Error('validate erro');
    }
  }
}