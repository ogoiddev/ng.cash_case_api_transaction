import { ILike } from 'typeorm';
import AppDataSource from '../../database/data-source';
import User from '../../database/entities/User';
import { AccountRepository }
  from '../../database/repositories/AccountRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import { ErrorTypes } from '../../errors/catalog';
import { cryptPassword } from '../../utils/Bcrypt/services';
import accountNumberGenerate from './generateAccountNumber';
import Validate from './validations';
import JWT from '../../utils/JWT/JWT.Validate';

export default class UserService {
  private userDB = UserRepository;
  private accountDB = AccountRepository;
  private queryRunner = AppDataSource.createQueryRunner();
  
  public async updateUserBalance(id: string, amount: number) {
    const results = await this.accountDB.update(id, { balance: amount });
    return results;
  }

  public async getAllUsers(token: string) {
    const userFromToken = JWT.validateToken(token);
    console.log(userFromToken);
    if (userFromToken.role !== 'admBoss') throw Error('Only the boss see it');
    
    const results = await this.userDB.find();
    return results;
  }

  public async getUserById(id: string) {
    const results = await this.userDB.findOneBy({ id });

    if (!results) throw Error(ErrorTypes.EntityNotFound);

    return results;
  }

  public async getUserByUserName(userName: string) {
    const results = await this.userDB
      .findOne({ where: { user_name: ILike(userName) } });
    
    return results;
  }
  
  public async saveNewUser(userDTO: User) {
    const setUserDataObj = this.userDB.create(userDTO);
    await Validate.newUser(setUserDataObj);

    const checkDuplicateData = await this.getUserByUserName(userDTO.user_name);
    if (checkDuplicateData !== null) throw Error(ErrorTypes.UserAlreadyExists);
    
    await this.saveUserAndAccountData(setUserDataObj);
    
    const results = await this.getUserByUserName(userDTO.user_name);
    return results;
  }
  
  private async saveUserAndAccountData(userDataToSave: User) {
    const hashPassword = cryptPassword(userDataToSave.password);
    const accountNumber = accountNumberGenerate(userDataToSave.user_name);

    await this.queryRunner.connect();
    await this.queryRunner.startTransaction();
    try {
      const setAccountDataObj = this.accountDB
        .create({ number: accountNumber });
      console.log(setAccountDataObj);

      const accountCreated = await this.accountDB.save(setAccountDataObj);

      const setUserToSave = this.userDB.create({
        ...userDataToSave,
        password: hashPassword,
        account_id: accountCreated.id,
      });

      await this.userDB.save(setUserToSave);

      await this.queryRunner.commitTransaction();
    } catch (err) {
      await this.queryRunner.rollbackTransaction();
      throw Error(`'Create new user fail', ${err}`);
    }
  }
}