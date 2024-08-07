export function getElements(selectors: { [key: string]: string }): {
  [key: string]: HTMLElement;
} {
  const elements: { [key: string]: HTMLElement } = {};

  for (const [key, selector] of Object.entries(selectors)) {
    elements[key] = document.querySelector(selector)!;
  }

  return elements;
}
