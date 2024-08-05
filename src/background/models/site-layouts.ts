import { User } from "./user";

export interface FormField {
  selector: string;
  type: string;
}

export interface SiteConfig {
  fields: FormField[];
}

export interface LayoutConfig {
  [key: string]: SiteConfig;
}

export interface SiteStrategy {
  fillForm(fields: FormField[], user: User): void;
}
