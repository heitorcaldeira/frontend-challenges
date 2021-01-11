import React from 'react';
import { Product } from '../../models/product.model';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/image-placeholder.svg';
import { priceFormat } from '../../utils/price-format';

const StyledProductItem = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${(props) => props.theme.lightGray};

  a {
    border: none;
    display: flex;
  }

  .price {
    color: ${(props) => props.theme.secondaryColor};
    margin-top: 8px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
  margin-left: 16px;
  line-height: 20px;

  .title {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.lightGray};
`;

const PromotionalPrice = styled.span`
  color: ${(props) => props.theme.gray};
  text-decoration: line-through;
`;

const Price = ({ salePrice, promotionalPrice, quantity }) => {
  return (
    <p className='price'>
      {quantity} x{' '}
      {promotionalPrice && promotionalPrice !== salePrice && (
        <>
          <PromotionalPrice>{priceFormat(promotionalPrice)}</PromotionalPrice>{' '}
          por{' '}
        </>
      )}
      {priceFormat(salePrice)}
    </p>
  );
};

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = React.memo(({ product }) => {
  return (
    <StyledProductItem>
      <Link to={`product/${product.id}`}>
        <Thumbnail
          src={product.imageUrl || placeholder}
          alt={product.imageUrl || 'Default product thumbnail'}
        />
        <Description>
          <div className='title'>{product.name} </div>
          <Price
            quantity={product.quantity}
            salePrice={product.salePrice}
            promotionalPrice={product.promotionalPrice}
          />
        </Description>
      </Link>
    </StyledProductItem>
  );
});

export default ProductItem;
