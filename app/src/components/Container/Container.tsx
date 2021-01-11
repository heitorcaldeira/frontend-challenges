import styled from 'styled-components';

export const Container = styled.div(
  ({ theme: { breakpoints } }) => `
    max-width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: ${breakpoints.sm}) {
      max-width: 540px;
    }

    @media (min-width: ${breakpoints.md}) {
      max-width: 720px;
    }

    @media (min-width: ${breakpoints.lg}) {
      max-width: 960px;
    }

    @media (min-width: ${breakpoints.xl}) {
      max-width: 1140px;
    }
`
);
