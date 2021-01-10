import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../assets/styles/themes';
import { Theme } from '../models/theme.model';

export function useTheme(defaultTheme: Theme) {
  const [theme, setTheme] = useState(() => {
    const storage = localStorage.getItem('nodis-theme');

    if (storage) {
      return JSON.parse(storage);
    }

    return defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('nodis-theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme.name === lightTheme.name ? darkTheme : lightTheme);
  };

  return [theme, toggleTheme];
}
