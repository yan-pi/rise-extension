export enum SiteLayout {
  LAYOUT1 = "layout1",
  // Add more layouts as needed
}

export interface LayoutConfig {
  usernameSelector: string;
  passwordSelector: string;
  firstNameSelector: string;
  lastNameSelector: string;
  emailSelector: string;
  submitSelector: string;
  loginUsernameSelector: string;
  loginPasswordSelector: string;
  loginSubmitSelector: string;
}

export const LayoutConfigs: Record<SiteLayout, LayoutConfig> = {
  [SiteLayout.LAYOUT1]: {
    usernameSelector: "#username",
    passwordSelector: "#password",
    firstNameSelector: "#firstName",
    lastNameSelector: "#lastName",
    emailSelector: "#email",
    submitSelector: "#submit",
    loginUsernameSelector: "#loginUsername",
    loginPasswordSelector: "#loginPassword",
    loginSubmitSelector: "#loginSubmit",
  },
  // Add more layouts as needed
};

export interface SiteConfig {
  id: string;
  name: string;
  url: string;
  apiEndpoint?: string;
  layout: SiteLayout;
}
