import { darkTheme } from '../../../assets/styles/themes';
import { renderWithProviders } from '../../../utils/testing';
import Loading from '../Loading';

describe('Loading', () => {
  it('should render with correct theme', () => {
    const { container } = renderWithProviders(<Loading />, {
      theme: darkTheme,
    });

    expect(container).toBeInTheDocument();
    expect(container.querySelector('circle')).toHaveAttribute(
      'fill',
      darkTheme.textColor
    );
  });
});
