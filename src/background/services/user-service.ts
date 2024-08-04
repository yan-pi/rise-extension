import { User } from '../models/user';
import { PasswordGenerator } from '../../utils/password-generator';

export class UserService {
  private passwordGenerator: PasswordGenerator;

  constructor() {
    this.passwordGenerator = new PasswordGenerator();
  }

  generateUser(): User {
    return {
      username: this.generateUsername(),
      password: this.passwordGenerator.generatePassword(12, true),
      email: this.generateEmail(),
    };
  }

  private generateUsername(): string {
    return `user_${Math.random().toString(36).substr(2, 8)}`;
  }

  private generateEmail(): string {
    return `${this.generateUsername()}@example.com`;
  }
}