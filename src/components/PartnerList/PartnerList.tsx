'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 100%;
  border: 2px dashed var(--color-primary);

  // this is only temporary
  // todo: remove / update this in the development ticket of partner list UI
  display: grid;
  place-content: center;

  text-align: center;

  overflow: hidden;
`;

function PartnerList() {
  return <Container>temporarily empty</Container>;
}

export default PartnerList;
