import React from 'react';
import styled from 'styled-components';
import { Product } from '../../models/product.model';
import placeholder from '../../assets/images/image-placeholder.svg';
import VerticalSpacing from '../VerticalSpacing';
import Button from '../Button';
import { useTranslation } from 'react-i18next';
import IncrementDecrement from '../IncrementDecrement';
import InputText from '../InputText';
import ProductInfo from '../ProductInfo/ProductInfo';

interface Props {
  product: Product;
  onUpdateProduct: () => void;
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
  ({ product, onUpdateProduct }) => {
    const { t } = useTranslation();

    const RenderInformation = ({ product }) => {
      return (
        <div className='row'>
          <div className='col-4'>
            {t('stock')}
            <InputText value={product.quantity} onChange={() => {}} />
          </div>
          <div className='col-8'>
            <div style={{ position: 'absolute', bottom: 0, right: 15 }}>
              <IncrementDecrement
                onDecrement={() => {}}
                onIncrement={() => {}}
              />
            </div>
          </div>
          <div className='col-6'>
            {t('salePrice')}
            <InputText value={product.salePrice} onChange={() => {}} />
          </div>
          <div className='col-6' style={{ paddingLeft: 0 }}>
            {t('promotionalPrice')}
            <InputText value={product.promotionalPrice} onChange={() => {}} />
          </div>
        </div>
      );
    };

    return (
      <StyledProductEditor>
        <Title>{product.name}</Title>
        <VerticalSpacing size={20}>
          <ImageContainer>
            <Image src={product.imageUrl || placeholder} />
          </ImageContainer>
          <VerticalSpacing size={20}>
            <RenderInformation product={product} />
          </VerticalSpacing>
          <VerticalSpacing size={20}>
            <ProductInfo
              onValueChanges={() => {}}
              weight={product.package.weight}
              depth={product.package.depth}
              height={product.package.height}
              width={product.package.width}
            />
          </VerticalSpacing>
          <Button text={t('save')} callback={onUpdateProduct} />
        </VerticalSpacing>
      </StyledProductEditor>
    );
  }
);

export default ProductEditor;
