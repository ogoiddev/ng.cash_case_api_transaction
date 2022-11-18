import AppDataSource from '../../database/data-source';
import User from '../../database/entities/User';
import { AccountRepository }
  from '../../database/repositories/AccountRepository';
import { UserRepository } from '../../database/repositories/UserRepository';
import accountNumberGenerate from './generateAccountNumber';
import Validate from './validations';

export default class UserService {
  private userDB = UserRepository;
  private accountDB = AccountRepository;

  public async getAllUsers() {
    const results = this.userDB.find();
    return results;
  }

  public async saveNewUser(userDTO: User) {
    const setUserDataObj = this.userDB.create(userDTO);
    await Validate.newUser(setUserDataObj);

    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await this.saveUserAndAccountData(setUserDataObj);
      
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    const results = this.userDB.findOneByOrFail(userDTO);
    return results;
  }

  private async saveUserAndAccountData(userDataToSave: User) {
    const accountNumber = accountNumberGenerate(userDataToSave.userName);
    const setAccountDataObj = this.accountDB.create({ number: accountNumber });

    await this.accountDB.save(setAccountDataObj);
    await this.userDB.save({ ...userDataToSave, account: setAccountDataObj });
  }
}