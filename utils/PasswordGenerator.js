// utils/PasswordGenerator.js

// Aviso de descontinuação
console.warn("PasswordGenerator.js foi descontinuado. Use Util.generatePassword de utils/Utils.js");

// class PasswordGenerator {
//   static generate(useSpecialChars, length = 12) {
//     const chars =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
//     let allChars = chars;
//     if (useSpecialChars) allChars += specialChars;

//     return Array(length)
//       .fill(allChars)
//       .map((x) => x[Math.floor(Math.random() * x.length)])
//       .join("");
//   }
// }
