import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import { lightTheme } from './assets/styles/themes';
import { useTheme } from './hooks/use-theme';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1 onClick={toggleTheme} style={{ color: theme.textColor }}>
        Change Theme
      </h1>
    </ThemeProvider>
  );
};

export default App;
