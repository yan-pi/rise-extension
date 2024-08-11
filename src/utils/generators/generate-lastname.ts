export function generateLastName(): string {
  const names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia"];
  return names[Math.floor(Math.random() * names.length)];
}