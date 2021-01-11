import React from 'react';
import { Product } from '../../models/product.model';
import ProductItem from '../ProductItem';
import ProductNotFound from '../ProductNotFound';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <>
      {!products.length && <ProductNotFound />}
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductList;
