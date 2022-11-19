import LoginFactory from './LoginFactory';
import TransactionFactory from './TransactionFactory';
import UserFactory from './UserFactory';

const userHandler = UserFactory.make();
const loginHandler = LoginFactory.make();
const transactionHandler = TransactionFactory.make();

export default { userHandler, loginHandler, transactionHandler };