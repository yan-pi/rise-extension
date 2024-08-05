import { FormField, SiteStrategy } from "../models/site-layouts";
import { User } from "../models/user";

export class RegistrationService {
  static registerUser(
    strategy: SiteStrategy,
    fields: FormField[],
    user: User
  ): void {
    strategy.fillForm(fields, user);
  }
}
