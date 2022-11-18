import { Like } from 'typeorm';
import AppDataSource from '../../database/data-source';
import User from '../../database/entities/User';
import { AccountRepository }
  from '../../database/repositories/AccountRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import { ErrorTypes } from '../../errors/catalog';
import accountNumberGenerate from './generateAccountNumber';
import Validate from './validations';

export default class UserService {
  private userDB = UserRepository;
  private accountDB = AccountRepository;

  public async getAllUsers() {
    const results = await this.userDB.find();
    return results;
  }

  public async getUserById(id: string) {
    const results = await this.userDB.findOneBy({ id });
    console.log('by id', results);

    if (!results) throw Error(ErrorTypes.EntityNotFound);

    return results;
  }

  public async getUserByUserName(userName: string) {
    const results = await this.userDB
      .find({ where: { userName: Like(`%${userName}%`) } });
    console.log('by name', results);

    return results;
  }

  public async saveNewUser(userDTO: User) {
    const setUserDataObj = this.userDB.create(userDTO);
    await Validate.newUser(setUserDataObj);

    const checkDuplicateData = await this.getUserByUserName(userDTO.userName);
    console.log(checkDuplicateData);
    
    if (checkDuplicateData.length) throw Error(ErrorTypes.UserAlreadyExists);
    
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await this.saveUserAndAccountData(setUserDataObj);
      
      await queryRunner.commitTransaction();
      const results = await this.getUserByUserName(userDTO.userName);
      return results;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } 
  }

  private async saveUserAndAccountData(userDataToSave: User) {
    const accountNumber = accountNumberGenerate(userDataToSave.userName);
    
    const setAccountDataObj = this.accountDB.create({ number: accountNumber });

    await this.accountDB.save(setAccountDataObj);
    await this.userDB.save({ ...userDataToSave, account: setAccountDataObj });
  }
}