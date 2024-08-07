interface UserData {
  username: string;
  email: string;
  password: string;
}

export function generateUserData(options: {
  predefinedPassword?: string;
  useRandomPassword: boolean;
}): UserData {
  const username = generateUsername();
  const email = generateEmail(username);
  const password = options.useRandomPassword
    ? generateRandomPassword()
    : options.predefinedPassword || generateRandomPassword();

  return { username, email, password };
}

function generateEmail(username: string): string {
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${username}@${domain}`;
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

function generateRandomPassword(): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

function generateRandomName(): string {
  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Ivan",
    "Julia",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
  ];
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}
