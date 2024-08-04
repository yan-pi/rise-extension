import Util from '../utils/Utils';

export class UserModel {
  static generateRandomUser() {
    return {
      username: Util.generateRandomString(8),
      password: Util.generatePassword(),
      name: Util.generateRandomName(),
      email: Util.generateRandomEmail(),
    };
  }
}
