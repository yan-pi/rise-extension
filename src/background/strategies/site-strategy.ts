import { SiteStrategy, FormField } from "../models/site-layouts";
import { fillForm } from "../../utils/form-filler";
import { User } from "../models/user";

export class Site1Strategy implements SiteStrategy {
  fillForm(fields: FormField[], user: User): void {
    fillForm(fields, user);
  }
}

// Adicione outras estratégias conforme necessário
export class SiteStrategyFactory {
  static getStrategy(site: string): SiteStrategy {
    switch (site) {
      case "site1":
        return new Site1Strategy();
      // Adicione outros casos conforme necessário
      default:
        throw new Error("Strategy not found");
    }
  }
}
