'use client';
import styled from 'styled-components';

export const Section = styled.section`
  /* border: 2px dashed black; */

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 36px;

  & > *:first-child {
    margin-top: auto;
  }

  overflow: auto;
`;
