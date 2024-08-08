import { decodeSpecialCharacters } from "./decoder-selector";

export function getElements(selectors: { [key: string]: string }): {
  [key: string]: HTMLElement | null;
} {
  const elements: { [key: string]: HTMLElement | null } = {};

  for (const [key, selector] of Object.entries(selectors)) {
    const decodedSelector = decodeSpecialCharacters(selector);
    console.log(`Searching for element with selector: ${decodedSelector}`);
    elements[key] = document.querySelector(decodedSelector);
    console.log(`Element found:`, elements[key]);
  }

  return elements;
}
