import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import { lightTheme } from './assets/styles/themes';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './hooks/use-theme';
import Router from './router/Router';
import './i18n';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <Router />
    </ThemeProvider>
  );
};

export default App;
