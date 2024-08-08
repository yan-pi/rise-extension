export function decodeSpecialCharacters(selector: string): string {
  return decodeURIComponent(escape(selector));
}
