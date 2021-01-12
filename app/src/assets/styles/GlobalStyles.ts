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
    background-color: ${(props) => props.theme.backgroundColor};
  }

  a {
    text-decoration: none;
  }

  .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md})  {
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    
    .col-md-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .col-auto, .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-xs, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 15px;
  }
`;
