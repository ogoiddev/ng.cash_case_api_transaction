import User from '../../database/entities/User';
import { checkPassword } from '../../utils/Bcrypt/services';
import Generate from '../../utils/JWT/JWT.Generate';
import Validate from '../../utils/JWT/JWT.Validate';
import UserService from '../userService';

export default class LoginService {
  private userDB = new UserService();
  private JWT = { Generate, Validate };

  public async login(userDTO: User) {
    const results = await this.userDB.getUserByUserName(userDTO.userName);

    checkPassword(userDTO.password, results.password);

    const token = this.JWT.Generate.createToken(results);

    return { results, token };
  }

  public async loginValidate(token: string) {
    const user = this.JWT.Validate.validateToken(token);

    const results = this.userDB.getUserById(user.data.id);

    return results;
  }
}