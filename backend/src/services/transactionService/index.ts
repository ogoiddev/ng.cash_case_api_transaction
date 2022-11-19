import AppDataSource from '../../database/data-source';
import User from '../../database/entities/User';
import Transaction from '../../database/entities/Transaction';
import { ErrorTypes } from '../../errors/catalog';
import { TransactionRepository }
  from '../../database/repositories/TransactionRepository';
import ValidateJWT from '../../utils/JWT/JWT.Validate';
import UserService from '../userService';

export interface IUserNameAndAmountDTO {
  userName: string;
  amount: number;
}

interface IUsers {
  user: User;
  userC: User;
}

export default class TransactionService {
  private userDB = new UserService();
  private transactionDB = TransactionRepository;
  private queryRunner = AppDataSource.createQueryRunner();

  public async getAllTransactions() {
    const results = await this.transactionDB.find();
    return results;
  }
  
  public async newTransaction(
    token: string,
    userNameAndAmount: IUserNameAndAmountDTO,
  ) {
    const users = await this.validateUsers(token, userNameAndAmount);
    
    if (userNameAndAmount.amount) {
      throw Error(ErrorTypes.InsufficientBalance);
    }

    if (users) {
      const transactionToSave = this.transactionDB
        .create({
          debited_account_id: users.user.account_id,
          credited_account_id: users.userC.account_id,
          value: userNameAndAmount.amount,
        });
        
      this.tryAndTransfer(transactionToSave, users);
    }
  }

  private async tryAndTransfer(TToSave: Transaction, users: IUsers) {
    console.log('ttttt', users);
    
    await this.queryRunner.connect();
    await this.queryRunner.startTransaction();
    try {
      const transferResults = await this.transactionDB.save(TToSave);

      // await this.userDB.updateUserBalance(
      //   transferResults.debitAccountId,
      //   Number(transferResults.value - users.user.account),
      // );
      // await this.userDB.updateUserBalance(
      //   transferResults.creditAccountId,
      //   Number(transferResults.value + users.userC.account),
      // );
      
      await this.queryRunner.commitTransaction();
    } catch (err) {
      await this.queryRunner.rollbackTransaction();
    }
    return this.getAllTransactions();
  }

  private async validateUsers(userD: string, userC: IUserNameAndAmountDTO) {
    const user = ValidateJWT.validateToken(userD);
    
    if (user.data.userName.toLowerCase()
      === userC.userName.toLowerCase()) {
      throw new Error(ErrorTypes.TheSameUserTransfer);
    }

    const userToCredit = await this.userDB
      .getUserByUserName(userC.userName);
    const userToDebit = await this.userDB
      .getUserByUserName(user.data.userName);
    
    if (!userToCredit || !userToDebit) throw Error(ErrorTypes.EntityNotFound);
    
    return { user: userToDebit, userC: { ...userToCredit } };
  }
}