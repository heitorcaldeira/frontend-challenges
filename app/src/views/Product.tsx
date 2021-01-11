import React from 'react';
import { Container } from '../components/Container/Container';
import { useTranslation } from 'react-i18next';

const Product: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t('product')}</h1>
    </Container>
  );
};

export default Product;
