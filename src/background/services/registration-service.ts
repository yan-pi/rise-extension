import { User } from '../models/user';

export class RegistrationService {
  async register(user: User): Promise<{ success: boolean; message: string }> {
    // Simulação de registro
    return new Promise((resolve) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        resolve({
          success,
          message: success ? 'Registration successful' : 'Registration failed',
        });
      }, 1000);
    });
  }
}