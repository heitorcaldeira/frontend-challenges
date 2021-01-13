import { getByAltText, renderWithProviders } from '../../../utils/testing';
import ProductItem from '../ProductItem';
// eslint-disable-next-line jest/no-mocks-import
import { productBuilder } from '../../../../__mocks__/product-builder';
import { priceFormat } from '../../../utils/price-format';

describe('ProductItem', () => {
  it('should render item properly', () => {
    const product = productBuilder();
    const { container, getByText, getByAltText } = renderWithProviders(
      <ProductItem product={product} />
    );

    expect(container).toBeInTheDocument();
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByAltText(product.imageUrl)).toBeInTheDocument();
    expect(
      getByText(`1 x ${priceFormat(product.salePrice)}`)
    ).toBeInTheDocument();
  });

  it('should render default product thumbnail', () => {
    const productWithoutThumb = productBuilder({ imageUrl: null });
    const { container, getByAltText } = renderWithProviders(
      <ProductItem product={productWithoutThumb} />
    );

    expect(container).toBeInTheDocument();
    expect(getByAltText('Default product thumbnail')).toBeInTheDocument();
  });
});
