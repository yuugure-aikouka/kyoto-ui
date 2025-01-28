'use client';
import React from 'react';

type Props = {
  initialTheme: string;
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext({
  theme: 'dark',
  toggleTheme: () => {},
} as ThemeContextType);

const ThemeProvider = ({ initialTheme, children }: Props) => {
  const [theme, setTheme] = React.useState<string>(initialTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme == 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;
