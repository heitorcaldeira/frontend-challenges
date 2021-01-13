import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
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
  onValueChanges: () => void;
  weight: number;
  height: number;
  width: number;
  depth: number;
}

const ProductInfo: React.FC<Props> = ({
  onValueChanges,
  weight,
  height,
  width,
  depth,
}) => {
  const { t } = useTranslation();

  const fields = [
    {
      label: t('weight'),
      unit: 'kg',
      value: weight,
    },
    {
      label: t('height'),
      unit: 'cm',
      value: height,
    },
    {
      label: t('width'),
      unit: 'cm',
      value: width,
    },
    {
      label: t('depth'),
      unit: 'cm',
      value: depth,
    },
  ];

  return (
    <ProductInfoContainer>
      {fields.map((field) => {
        return (
          <div className='line' key={field.label}>
            <span>{field.label}</span>
            <div className='input'>
              <InputText
                width={'65px'}
                onChange={(e) => {}}
                value={field.value}
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
