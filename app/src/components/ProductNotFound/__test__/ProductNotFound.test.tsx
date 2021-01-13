import { renderWithProviders } from '../../../utils/testing';
import ProductNotFound from '../ProductNotFound';

describe('ProductNotFound', () => {
  it('should render', () => {
    const { container } = renderWithProviders(<ProductNotFound />);

    expect(container).toBeInTheDocument();
  });
});
