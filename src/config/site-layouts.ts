export interface SiteLayout {
  name: string;
  selectors: {
    form: string;
    username: string;
    email: string;
    password: string;
    submit: string;
  };
}

export const siteLayouts: SiteLayout[] = [
  {
    name: "Default",
    selectors: {
      form: "form",
      username: "input[name='username']",
      email: "input[type='email']",
      password: "input[type='password']",
      submit: "button[type='submit']",
    },
  },
  {
    name: "Generic Social Media",
    selectors: {
      form: "#signup-form",
      username: "#username",
      email: "#email",
      password: "#password",
      submit: "#submit-button",
    },
  },
  // Add more layouts as needed
];
