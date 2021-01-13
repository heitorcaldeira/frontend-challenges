import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Product } from '../../models/product.model';
import placeholder from '../../assets/images/image-placeholder.svg';
import VerticalSpacing from '../VerticalSpacing';
import Button from '../Button';
import { useTranslation } from 'react-i18next';
import IncrementDecrement from '../IncrementDecrement';
import InputText from '../InputText';
import ProductInfo from '../ProductInfo/ProductInfo';
import Loading from '../Loading/Loading';

interface Props {
  product: Product;
  onUpdateProduct: (productEdited) => void;
  isUpdating: boolean;
}

const StyledProductEditor = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
`;

const Title = styled.h1`
  font-size: 21px;
  color: ${(props) => props.theme.textColor};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 400;
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    max-width: 400px;
  }
`;

const ProductEditor: React.FC<Props> = React.memo(
  ({ product, onUpdateProduct, isUpdating }) => {
    const [edited, setEdited] = useState({ ...product });
    const { t } = useTranslation();

    const updateForm = (field, value, isPackage = false) => {
      let packageData = { ...edited.package };

      if (isPackage) {
        packageData = {
          ...packageData,
          [field]: value,
        };
      }

      const updated = {
        ...edited,
        [field]: value,
        package: {
          ...packageData,
        },
      };

      setEdited(updated);
    };

    return (
      <StyledProductEditor>
        <Title>{edited.name}</Title>
        <VerticalSpacing size={20}>
          <ImageContainer>
            <Image src={edited.imageUrl || placeholder} />
          </ImageContainer>
          <VerticalSpacing size={20}>
            <div className='row'>
              <div className='col-4'>
                {t('stock')}
                <InputText
                  value={edited.quantity}
                  onChange={(e) => updateForm('quantity', e.target.value)}
                />
              </div>
              <div className='col-8'>
                <div style={{ position: 'absolute', bottom: 0, right: 15 }}>
                  <IncrementDecrement
                    current={edited.quantity}
                    onDecrement={(value) => updateForm('quantity', value)}
                    onIncrement={(value) => updateForm('quantity', value)}
                  />
                </div>
              </div>
              <div className='col-6'>
                {t('salePrice')}
                <InputText
                  value={edited.salePrice}
                  onChange={(e) => updateForm('salePrice', e.target.value)}
                />
              </div>
              <div className='col-6' style={{ paddingLeft: 0 }}>
                {t('promotionalPrice')}
                <InputText
                  value={edited.promotionalPrice}
                  onChange={(e) =>
                    updateForm('promotionalPrice', e.target.value)
                  }
                />
              </div>
            </div>
          </VerticalSpacing>
          <VerticalSpacing size={20}>
            <ProductInfo
              onValueChanges={(field, value) => updateForm(field, +value, true)}
              product={edited}
            />
          </VerticalSpacing>
          {isUpdating && <Loading />}
          <Button text={t('save')} callback={() => onUpdateProduct(edited)} />
        </VerticalSpacing>
      </StyledProductEditor>
    );
  }
);

export default ProductEditor;
