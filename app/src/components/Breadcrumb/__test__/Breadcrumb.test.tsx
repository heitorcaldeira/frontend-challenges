import { darkTheme } from '../../../assets/styles/themes';
import { renderWithProviders } from '../../../utils/testing';
import Breadcrumb from '../Breadcrumb';

describe('Breadcrumb', () => {
  it('should render with default props', () => {
    const { container, getByText } = renderWithProviders(
      <Breadcrumb title={'Menu'} link={'localhost'} />,
      {
        theme: darkTheme,
      }
    );

    expect(container).toBeInTheDocument();
    expect(getByText('Menu')).toBeInTheDocument();
    expect(container.querySelector('a')).toHaveAttribute('href', '/localhost');
    expect(container.querySelector('path')).toHaveAttribute(
      'fill',
      darkTheme.gray
    );
  });
});
