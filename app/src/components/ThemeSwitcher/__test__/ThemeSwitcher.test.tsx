import { renderWithProviders } from '../../../utils/testing';
import ThemeSwitcher from '../ThemeSwitcher';

describe('ThemeSwitcher', () => {
  it('should render and call toggle function', () => {
    const toggleTheme = jest.fn();
    const { container, getByAltText } = renderWithProviders(
      <ThemeSwitcher toggleTheme={toggleTheme} />
    );

    const switcher = getByAltText('switch theme');
    switcher.click();

    expect(container).toBeInTheDocument();
    expect(toggleTheme).toBeCalledTimes(1);
  });
});
