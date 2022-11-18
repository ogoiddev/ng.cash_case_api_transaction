import LoginFactory from './LoginFactory';
import UserFactory from './UserFactory';

const userHandler = UserFactory.make();
const loginHandler = LoginFactory.make();

export default { userHandler, loginHandler };