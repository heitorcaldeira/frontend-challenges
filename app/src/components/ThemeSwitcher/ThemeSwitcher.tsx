import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { darkTheme } from '../../assets/styles/themes';
import styled from 'styled-components';
import { Container } from '../Container/Container';

export const ThemeSwitcherContainer = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 40px;
`;

interface Props {
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
  const { primaryColor, gray, lightGray, secondaryColor, name } = useContext(
    ThemeContext
  );

  return (
    <ThemeSwitcherContainer>
      <Container>
        <Switch
          alt='switch theme'
          onChange={toggleTheme}
          checked={name === darkTheme.name}
          uncheckedIcon={false}
          width={30}
          handleDiameter={16}
          height={12}
          checkedIcon={false}
          offColor={primaryColor}
          onHandleColor={gray}
          offHandleColor={lightGray}
          onColor={secondaryColor}
        />
      </Container>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
