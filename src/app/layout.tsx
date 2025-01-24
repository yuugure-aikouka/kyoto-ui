import './globals.css';

import StyledComponentsRegistry from '@/styled-component-registry/registry';

import { Funnel_Display } from 'next/font/google';
import type { Metadata } from 'next';

const defaultFont = Funnel_Display({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'mateify',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
