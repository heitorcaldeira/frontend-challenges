import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../assets/styles/themes';

const Providers = ({ children, theme }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>{children}</Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

function renderWithProviders(ui, { theme = darkTheme, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Providers theme={theme}>{children}</Providers>;
  }

  return render(ui, { wrapper: Wrapper as any, ...renderOptions });
}

export * from '@testing-library/react';

export { renderWithProviders };
