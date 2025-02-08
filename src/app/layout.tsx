import '@/app/globals.css';

import StyledComponentsRegistry from '@/styled-component-registry/registry';
import GlobalStyles from '@/styled-component-registry/global-styles';

import { ThemeProvider } from '@/contexts/Theme';
import { getThemePreference } from '@/utils/theme';
import { Funnel_Display } from 'next/font/google';
import type { Metadata } from 'next';

const defaultFont = Funnel_Display({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Anonawa',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, themeColors] = await getThemePreference();

  return (
    <html lang="en" style={themeColors as React.CSSProperties}>
      <body className={defaultFont.className}>
        <StyledComponentsRegistry>
          <ThemeProvider initialTheme={theme}>
            {children}
            <GlobalStyles />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
