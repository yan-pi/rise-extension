class Util {
  static generateRandomString(length) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array(length)
      .fill(chars)
      .map((x) => x[Math.floor(Math.random() * x.length)])
      .join("");
  }

  static generateRandomName() {
    const firstNames = ["John", "Jane", "Mike", "Emily", "David", "Sarah"];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
    ];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  }

  static generateRandomEmail() {
    const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
    const username = this.generateRandomString(8);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${username}@${domain}`;
  }

  static generatePassword(useSpecialChars, length = 12) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allChars = chars;
    if (useSpecialChars) allChars += specialChars;

    return Array(length)
      .fill(allChars)
      .map((x) => x[Math.floor(Math.random() * x.length)])
      .join("");
  }
}

export default Util;
