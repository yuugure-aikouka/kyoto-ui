import { cookies } from 'next/headers';
import { LIGHT_COLORS, DARK_COLORS } from '@/const/COLORS';

export const getThemePreference = async (): Promise<
  [theme: string, colors: object]
> => {
  const savedTheme = (await cookies()).get('color-theme');
  // defaults to dark
  const theme = savedTheme?.value || 'dark';

  return [theme, theme === 'light' ? LIGHT_COLORS : DARK_COLORS];
};
