import Util from '../utils/Utils';
import UserModel from './UserModel';

export class RegistrationModel {
  generateUserData(useRandomPassword, useSpecialChars) {
    const username = `user_${Math.floor(Math.random() * 9000) + 1000}`;
    const password = useRandomPassword ? Util.generatePassword(useSpecialChars) : "default_password";
    const name = Util.generateRandomName(); 
    
    return new UserModel(username, password, name);
  }
}
