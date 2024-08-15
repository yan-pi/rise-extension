export function generateRealName(): string {
  const firstNames = ["João", "Maria", "Pedro", "Ana", "Carlos"];
  const lastNames = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues"];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }`;
}
