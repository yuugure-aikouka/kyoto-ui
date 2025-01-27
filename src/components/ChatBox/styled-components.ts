'use client';
import styled from 'styled-components';

export const Section = styled.section`
  /* border: 2px dashed black;  */

  display: flex;
  flex-direction: column;
  gap: 8px;

  // fallback padding
  padding: 36px;
  padding: min(36px, 4%);

  & > *:first-child {
    margin-top: auto;
  }

  overflow: auto;
`;
