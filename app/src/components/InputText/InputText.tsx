import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

interface Props {
  textAlign?: 'center' | 'left' | 'right';
  width?: string;
}

const InputText = styled.input<Props>`
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  height: 36px;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
  padding: 0 10px;
  text-align: ${(props) => props.textAlign || 'left'};
  width: ${(props) => props.width || '100%'};
`;

export default InputText;
