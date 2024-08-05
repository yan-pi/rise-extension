import { User } from "../models/user";
import { generatePassword } from "../../utils/password-generator";
import { generateRandomName } from "../../utils/name-generator";
import generateEmail from "../../utils/email-generator";

export function generateUser(): User {
  return {
    username: generateUsername(),
    password: generatePassword(12, true),
    name: generateRandomName(),
    email: generateEmail(),
  };
}
