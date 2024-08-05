import { User } from "../models/user";
import { StorageService } from "./storage-service";
import { generateRandomName } from "../../utils/name-generator";
import { generateEmail } from "../../utils/email-generator";
import { generatePassword } from "../../utils/password-generator";

export const createUser = (
  useRandomPassword: boolean,
  useSpecialChars: boolean
): User => {
  const name = generateRandomName();
  const username = name.split(" ").join("").toLowerCase();
  const email = generateEmail(username);
  const password = generatePassword(12, useSpecialChars);

  const user: User = { name, username, email, password };
  StorageService.saveUser(user);
  return user;
};
