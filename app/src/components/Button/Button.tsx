import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  callback: () => void;
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 9px 14px;
  border: 0;
  font-size: 15px;
`;

const Button: React.FC<Props> = ({ text, callback }) => {
  return <StyledButton onClick={callback}>{text}</StyledButton>;
};

export default Button;
