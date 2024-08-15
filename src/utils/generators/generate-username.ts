export function generateUsername(): string {
  const adjectives = ["happy", "lucky", "sunny", "clever", "kind"];
  const nouns = ["cat", "dog", "bird", "tiger", "lion"];
  const randomNumber = Math.floor(Math.random() * 1000);

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective}${randomNoun}${randomNumber}`;
}
