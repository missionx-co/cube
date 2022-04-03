export const litteral = (value: string[]): string =>
  value.map((item) => `"${item}"`).join('  |  ');
