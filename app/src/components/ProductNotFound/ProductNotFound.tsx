import React from 'react';
import styled from 'styled-components';

const StyledProductNotFound = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
`;

const ProductNotFound: React.FC = () => {
  return (
    <StyledProductNotFound>Nenhum produto encontrado.</StyledProductNotFound>
  );
};

export default ProductNotFound;
