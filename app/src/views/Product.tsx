import React, { useCallback } from 'react';
import { Container } from '../components/Container';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/Breadcrumb';
import VerticalSpacing from '../components/VerticalSpacing/VerticalSpacing';
import ProductEditor from '../components/ProductEditor';

const Product: React.FC = () => {
  const { t } = useTranslation();
  const product = {
    id: 18,
    name: 'Livro - Sol da meia-noite: (Midnight Sun) - Série Crepúsculo',
    ean: '9786555600292',
    category: 'Livros',
    imageUrl: null,
    description:
      'Aguardado há mais de uma década, &lt;i&gt;Sol da meia-noite&lt;/i&gt;, novo livro do universo de &lt;i&gt;Crepúsculo&lt;/i&gt;, chega ao Brasil em lançamento mundial no dia 4 de agosto',
    package: {
      height: 23,
      width: 16,
      depth: 4,
      weight: 1030,
    },
    salePrice: 5490,
    promotionalPrice: 5490,
    quantity: 2,
  };

  const updateProduct = useCallback(() => {}, []);

  return (
    <Container>
      <Breadcrumb link={'/'} title={t('products')} />
      <VerticalSpacing size={15}>
        <ProductEditor product={product} onUpdateProduct={updateProduct} />
      </VerticalSpacing>
    </Container>
  );
};

export default Product;
