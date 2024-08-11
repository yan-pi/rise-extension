import { SiteLayout } from "../config/site-layouts";
import { generateCPF } from "./generators/generate-cpf";
import { generateEmail } from "./generators/generate-email";
import { generateFirstName } from "./generators/generate-firstname";
import { generateGenericData } from "./generators/generate-genericdata";
import { generateLastName } from "./generators/generate-lastname";
import { generatePhoneNumber } from "./generators/generate-phonenumber";
import { generateRandomPassword } from "./generators/generate-random-password";
import { generateRealName } from "./generators/generate-realname";
import { generateUsername } from "./generators/generate-username";

export interface UserData {
  [key: string]: string;
}

export function generateUserData(
  layout: SiteLayout,
  options: { predefinedPassword?: string; useRandomPassword: boolean }
): UserData {
  const userData: UserData = {};

  layout.dataFields.forEach((field: string) => {
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
    //console.log(`Generated data for ${field}: ${userData[field]}`);
  });

  return userData;
}
