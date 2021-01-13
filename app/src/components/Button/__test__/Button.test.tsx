import { darkTheme } from '../../../assets/styles/themes';
import { renderWithProviders } from '../../../utils/testing';
import Button from '../Button';

describe('Button', () => {
  it('should render with default props', () => {
    const callback = jest.fn();
    const { getByText } = renderWithProviders(
      <Button text={'Botão'} callback={callback} />,
      {
        theme: darkTheme,
      }
    );

    const btn = getByText('Botão');
    btn.click();

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveStyleRule('background-color', darkTheme.primaryColor);
    expect(btn).toHaveStyleRule('color', darkTheme.textColorOnPrimary);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
