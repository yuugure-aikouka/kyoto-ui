'use client';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;

  // fallback for dvh incase it isn't supported
  height: 100vh;
  height: 100dvh;

  display: flex;

  // it is guaranteed that this container will only contain 2 children
  & > *:first-child {
    flex-grow: 2;
  }

  & > *:last-child {
    flex-grow: 8;
  }
`;

export default Container;
