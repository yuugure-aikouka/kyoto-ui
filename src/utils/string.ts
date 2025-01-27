const BLANK = '';

export const isBlank = (string: string): boolean => {
  return !string || string.trim() == BLANK;
};
