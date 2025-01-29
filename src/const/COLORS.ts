const COMMON_COLORS = {
  '--color-white': 'hsl(0deg 0% 100%)',
};

export const LIGHT_COLORS = {
  '--color-text': 'hsl(0deg 0% 5%)',
  '--color-background': 'hsl(0deg 0% 100%)',

  // yellow
  '--color-primary': 'hsl(45deg, 100%, 55%)',
  // grey
  '--color-secondary': 'hsl(0deg 0% 92%)',

  // blue
  '--color-info': 'hsl(204deg 87% 52%)',

  ...COMMON_COLORS,
};

export const DARK_COLORS = {
  '--color-text': 'hsl(0deg 0% 100%)',
  '--color-background': 'hsl(230deg 20% 8%)',

  '--color-primary': 'hsl(45deg, 100%, 45%)',
  '--color-secondary': 'hsl(0deg 0% 92%)',

  '--color-info': 'hsl(213 100% 45%)',

  ...COMMON_COLORS,
};
