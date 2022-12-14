import { ErrorTypes } from '../../errors/catalog';
import User from '../../database/entities/User';
import { checkPassword } from '../../utils/Bcrypt/services';
import Generate from '../../utils/JWT/JWT.Generate';
import Validate from '../../utils/JWT/JWT.Validate';
import UserService from '../userService';

export default class LoginService {
  private userDB = new UserService();
  private JWT = { Generate, Validate };

  public async login(userDTO: User) {
    const userData = await this.userDB.getUserByUserName(userDTO.user_name);
    if (!userData) throw Error(ErrorTypes.EntityNotFound);

    checkPassword(userDTO.password, userData.password);

    const userToToken = {
      id: userData.id,
      user_name: userData.user_name,
      account_id: userData.account_id,
      role: userData.role,
    };

    const token = this.JWT.Generate.createToken(userToToken);

    return { ...userData, token };
  }

  public async loginValidate(token: string) {
    const user = this.JWT.Validate.validateToken(token);

    const results = await this.userDB.getUserById(user.id);

    return results.id;
  }
}