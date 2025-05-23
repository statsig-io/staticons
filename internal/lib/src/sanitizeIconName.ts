export function sanitizeIconName(name: string): string {
  const numberWords: Record<string, string> = {
    "0": "Zero-",
    "1": "One-",
    "2": "Two-",
    "3": "Three-",
    "4": "Four-",
    "5": "Five-",
    "6": "Six-",
    "7": "Seven-",
    "8": "Eight-",
    "9": "Nine-",
  };

  return name.replace(/^\d/, (digit) => numberWords[digit] || digit);
}
