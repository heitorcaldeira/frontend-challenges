import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import { Product } from '../../models/product.model';
import InputText from '../InputText';

export const ProductInfoContainer = styled.div`
  width: 100%;

  .line {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    align-items: center;
  }

  .input {
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
  }
`;

interface Props {
  onValueChanges: (field, value) => void;
  product: Product;
}

const ProductInfo: React.FC<Props> = ({ onValueChanges, product }) => {
  const { t } = useTranslation();

  const fields = [
    {
      label: 'weight',
      unit: 'kg',
    },
    {
      label: 'height',
      unit: 'cm',
    },
    {
      label: 'width',
      unit: 'cm',
    },
    {
      label: 'depth',
      unit: 'cm',
    },
  ];

  return (
    <ProductInfoContainer>
      {fields.map((field) => {
        return (
          <div className='line' key={field.label}>
            <span>{t(field.label)}</span>
            <div className='input'>
              <InputText
                width={'65px'}
                onChange={(e) => onValueChanges(field.label, e.target.value)}
                value={product.package[field.label]}
              />{' '}
              <span>{field.unit}</span>
            </div>
          </div>
        );
      })}
    </ProductInfoContainer>
  );
};

export default ProductInfo;
