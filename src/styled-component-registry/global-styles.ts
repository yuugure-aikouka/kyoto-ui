'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background-color: var(--color-background);
    color: var(--color-text);

    transition: background-color ease-in-out 300ms, color ease-in-out 300ms;

    --laptop: 1024px;
    --tablet: 768px;
    --mobile: 425px;

    --ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
    --ease-in: cubic-bezier(0.75, 0, 1, 1);
    --ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
    --ease: cubic-bezier(0.44, 0.21, 0, 1);
  }

  html, body {
    height: 100dvh;
  }
`;

export default GlobalStyles;
