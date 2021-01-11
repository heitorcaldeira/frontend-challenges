import { renderWithProviders } from '../../../utils/testing';
// eslint-disable-next-line jest/no-mocks-import
import { productBuilder } from '../../../../__mocks__/product-builder';
import ProductList from '../ProductList';

describe('ProductList', () => {
  it('should render products list', () => {
    const products = [
      productBuilder({ id: 1, name: 'Primeiro produto' }),
      productBuilder({ id: 2, name: 'Segundo produto' }),
    ];
    const { container, getByText } = renderWithProviders(
      <ProductList products={products} />
    );

    expect(container).toBeInTheDocument();
    expect(getByText(products[0].name)).toBeInTheDocument();
    expect(getByText(products[1].name)).toBeInTheDocument();
  });

  it('should render empty list component', () => {
    const products = [];
    const { container, getByText } = renderWithProviders(
      <ProductList products={products} />
    );

    expect(container).toBeInTheDocument();
    expect(getByText('Nenhum produto encontrado.')).toBeInTheDocument();
  });
});
