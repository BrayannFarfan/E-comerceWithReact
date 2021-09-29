import React from 'react';
import { Container, ContainerTitle } from './ItemListContainerStyled';

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Container>
        <ContainerTitle>{greeting}</ContainerTitle>
      </Container>
    </>
  );
}