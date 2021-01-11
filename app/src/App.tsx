import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import { lightTheme } from './assets/styles/themes';
import { useTheme } from './hooks/use-theme';
import Router from './router/Router';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};

export default App;
