import { createGlobalStyle } from 'styled-components';

import RubikRegular from '../fonts/Rubik-Regular.ttf';
import RubikMedium from '../fonts/Rubik-Medium.ttf';
import RubikBold from '../fonts/Rubik-Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Rubik-Regular';
    src: url(${RubikRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Rubik-Medium';
    src: url(${RubikMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Rubik-Bold';
    src: url(${RubikBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.primaryFontRegular}, sans-serif;
    background-color: ${(props) => props.theme.backgroundColor}
  }

  a {
    text-decoration: none;
  }
`;
