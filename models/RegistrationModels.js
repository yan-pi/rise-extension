class RegistrationModel {
  generateUserData(useRandomPassword, useSpecialChars) {
    const username = `user_${Math.floor(Math.random() * 9000) + 1000}`;
    const password = useRandomPassword ? PasswordGenerator.generate(useSpecialChars) : "default_password";
    const name = `User ${Math.floor(Math.random() * 9000) + 1000}`;
    return new UserModel(username, password, name);
  }
}
