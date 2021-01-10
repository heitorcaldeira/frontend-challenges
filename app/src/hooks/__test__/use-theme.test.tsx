import { renderHook, act } from '@testing-library/react-hooks';
import { darkTheme, lightTheme } from '../../assets/styles/themes';
import { useTheme } from '../use-theme';

describe('use-theme hook', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useTheme(lightTheme));

    expect(result.current.theme).toEqual(lightTheme);
  });

  it('should toggle theme', () => {
    const { result } = renderHook(() => useTheme(lightTheme));

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toEqual(darkTheme);
  });
});
