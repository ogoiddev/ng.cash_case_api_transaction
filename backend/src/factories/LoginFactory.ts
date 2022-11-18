import LoginController from '../controllers/LoginController';
import Service from '../services/loginService';

export default class LoginFactory {
  static make() {
    const service = new Service();
    const controller = new LoginController(service);
    
    return controller;
  }
}