import { decodeSpecialCharacters } from "./decoder-selector";
import { createLogger } from "./logger";

const logger = createLogger();

export function getElements(selectors: { [key: string]: string }): {
  [key: string]: HTMLElement | null;
} {
  const elements: { [key: string]: HTMLElement | null } = {};

  for (const [key, selector] of Object.entries(selectors)) {
    const decodedSelector = decodeSpecialCharacters(selector);
    logger.info(`Generated data for field ${decodedSelector}`);
    elements[key] = document.querySelector(decodedSelector);
    console.log("Element found:", elements[key]);
  }

  return elements;
}
