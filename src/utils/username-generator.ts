export function generateUsername() {
  const adjectives = [
    "happy",
    "sleepy",
    "sneezy",
    "grumpy",
    "dopey",
    "bashful",
    "doc",
  ];
  const nouns = ["dwarf", "cat", "dog", "bird", "fish", "horse", "hamster"];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective}-${randomNoun}`;
}
