export class UserModel {
  static generateRandomUser() {
    return {
      username: Util.generateRandomString(8),
      password: PasswordGenerator.generate(true),
      name: Util.generateRandomName(),
      email: Util.generateRandomEmail(),
    };
  }
}
