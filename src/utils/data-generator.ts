import { SiteLayout } from "../config/site-layouts";

export interface UserData {
  [key: string]: string;
}

export function generateUserData(
  layout: SiteLayout,
  options: { predefinedPassword?: string; useRandomPassword: boolean }
): UserData {
  const userData: UserData = {};

  layout.dataFields.forEach((field: any) => {
    switch (field) {
      case "username":
        userData[field] = generateUsername();
        break;
      case "password":
        userData[field] = options.useRandomPassword
          ? generateRandomPassword()
          : options.predefinedPassword || generateRandomPassword();
        break;
      case "passwordConfirm":
        userData[field] = userData["password"];
        break;
      case "realName":
        userData[field] = generateRealName();
        break;
      case "email":
        userData[field] = generateEmail(
          userData["username"] || generateUsername()
        );
        break;
      case "cpf":
        userData[field] = generateCPF();
        break;
      case "phoneNumber":
        userData[field] = generatePhoneNumber();
        break;
      case "firstName":
        userData[field] = generateFirstName();
        break;
      case "lastName":
        userData[field] = generateLastName();
        break;
      default:
        userData[field] = generateGenericData();
    }
    console.log(`Generated data for ${field}: ${userData[field]}`);
  });

  return userData;
}

function generateUsername(): string {
  const adjectives = ["happy", "lucky", "sunny", "clever", "kind"];
  const nouns = ["cat", "dog", "bird", "tiger", "lion"];
  const randomNumber = Math.floor(Math.random() * 1000);

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective}${randomNoun}${randomNumber}`;
}

function generateCPF(): string {
  // Helper function to generate a random digit
  const randomDigit = () => Math.floor(Math.random() * 10);

  // Generate the first 9 digits of the CPF
  const cpf = Array.from({ length: 9 }, randomDigit);

  // Calculate the first verification digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += cpf[i] * (10 - i);
  }
  let firstVerificationDigit = 11 - (sum % 11);
  if (firstVerificationDigit >= 10) firstVerificationDigit = 0;
  cpf.push(firstVerificationDigit);

  // Calculate the second verification digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += cpf[i] * (11 - i);
  }
  let secondVerificationDigit = 11 - (sum % 11);
  if (secondVerificationDigit >= 10) secondVerificationDigit = 0;
  cpf.push(secondVerificationDigit);

  // Format the CPF as a string
  return cpf.join("");
}

function generateRealName(): string {
  const firstNames = ["João", "Maria", "Pedro", "Ana", "Carlos"];
  const lastNames = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues"];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }`;
}

function generateEmail(username: string): string {
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${username}@${domain}`;
}

function generateRandomPassword(): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

function generateFirstName(): string {
  const names = ["John", "Jane", "Alice", "Bob", "Charlie", "Diana"];
  return names[Math.floor(Math.random() * names.length)];
}

function generateLastName(): string {
  const names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia"];
  return names[Math.floor(Math.random() * names.length)];
}

function generatePhoneNumber(): string {
  const areaCode = Math.floor(Math.random() * 89) + 11;

  const phoneNumber = Math.floor(Math.random() * 900000000) + 100000000;

  const formattedPhoneNumber = `${areaCode}${phoneNumber}`;

  return formattedPhoneNumber;
}

function generateGenericData(): string {
  return `Data${Math.floor(Math.random() * 1000)}`;
}
