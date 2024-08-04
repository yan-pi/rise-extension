export class PasswordGenerator {
  generatePassword(length: number, useSpecialChars: boolean): string {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const specialChars = '!@#$%^&*()_+{}[]|:;<>,.?/~`';
    let password = '';

    for (let i = 0; i < length; i++) {
      if (useSpecialChars && Math.random() < 0.3) {
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      } else {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
      }
    }

    return password;
  }
}