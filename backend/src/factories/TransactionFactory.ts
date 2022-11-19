import TransactionController from '../controllers/TransactionController';
import Service from '../services/transactionService';

export default class TransactionFactory {
  static make() {
    const service = new Service();
    const controller = new TransactionController(service);
    
    return controller;
  }
}