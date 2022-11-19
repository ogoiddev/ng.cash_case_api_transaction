import { AccountRepository }
  from '../../database/repositories/AccountRepository';
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
  userD: User;
  userC: User;
}

export default class TransactionService {
  private userDB = new UserService();
  private transactionDB = TransactionRepository;
  private accountDB = AccountRepository;
  private queryRunner = AppDataSource.createQueryRunner();

  public async getAllTransactions() {
    const results = await this.transactionDB.find();
    return results;
  }
  
  public async newTransaction(
    token: string,
    userNameAndAmount: IUserNameAndAmountDTO,
  ) {
    const users = await this.validateAndGetUsers(token, userNameAndAmount);
    
    if (users.userD.account.balance < userNameAndAmount.amount) {
      throw Error(ErrorTypes.InsufficientBalance);
    }
    
    const transactionToSave = this.transactionDB
      .create({
        debited_account_id: users.userD.account_id,
        credited_account_id: users.userC.account_id,
        value: userNameAndAmount.amount,
      });
    
    await this.tryToTransfer(transactionToSave, users);
  }

  private async tryToTransfer(TToSave: Transaction, users: IUsers) {    
    await this.queryRunner.connect();
    await this.queryRunner.startTransaction();
    try {
      const transactionResults = await this.transactionDB.save(TToSave);
      console.log(users);
      
      const debitBalance = users.userD.account.balance
        - transactionResults.value;
      await this.accountDB.update(
        { id: users.userD.account_id },
        { balance: debitBalance },
      );

      const creditBalance = users.userC.account.balance
        + transactionResults.value;
      console.log(creditBalance);
      
      await this.accountDB.update(
        { id: users.userC.account_id },
        { balance: creditBalance },
      );

      await this.queryRunner.commitTransaction();
      return transactionResults;
    } catch (err) {
      await this.queryRunner.rollbackTransaction();
      throw Error('Transaction fail');
    } 
  }

  private async validateAndGetUsers(
    userDToken: string,
    userC: IUserNameAndAmountDTO,
  ) {
    const userFromToken = ValidateJWT.validateToken(userDToken);
    
    if (userFromToken.user_name.toLowerCase()
      === userC.userName.toLowerCase()) {
      throw new Error(ErrorTypes.TheSameUserTransfer);
    }

    const userToCredit = await this.userDB
      .getUserByUserName(userC.userName);

    const userToDebit = await this.userDB
      .getUserByUserName(userFromToken.user_name);
    
    if (!userToCredit || !userToDebit) throw Error(ErrorTypes.EntityNotFound);
    
    return { userD: userToDebit, userC: userToCredit };
  }
}