const COMMON_COLORS = {
  '--color-white': 'hsl(0deg 0% 100%)',
  '--color-dark': 'hsl(230deg 20% 8%)',

  // red
  '--color-danger': 'hsl(350deg 90% 55%)',
  // green
  '--color-success': 'hsl(160deg 100% 38%)',
};

export const LIGHT_COLORS = {
  '--color-text': 'hsl(0deg 0% 5%)',
  '--color-background': 'hsl(0deg 0% 100%)',

  // stripe's / discord's purple
  '--color-primary': 'hsl(245deg 98% 80%)',
  // grey
  '--color-secondary': 'hsl(0deg 0% 92%)',

  // blue
  '--color-info': 'hsl(204deg 87% 52%)',

  ...COMMON_COLORS,
};

export const DARK_COLORS = {
  '--color-text': 'hsl(0deg 0% 100%)',
  '--color-background': 'hsl(230deg 20% 8%)',

  '--color-primary': 'hsl(245deg 98% 67%)',
  '--color-secondary': 'hsl(0deg 0% 45%)',

  '--color-info': 'hsl(213 100% 45%)',

  ...COMMON_COLORS,
};
