import UserController from '../controllers/UserController';
import Service from '../services/userService';

export default class UserFactory {
  static make() {
    const service = new Service();
    const controller = new UserController(service);
    
    return controller;
  }
}