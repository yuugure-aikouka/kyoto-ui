'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background-color: var(--color-background);
    color: var(--color-text);

    --laptop: 1024px;
    --tablet: 768px;
    --mobile: 425px;
  }

  html, body {
    height: 100dvh;
  }
`;

export default GlobalStyles;
