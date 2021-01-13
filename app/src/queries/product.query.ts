import { gql } from '@apollo/client';

export const PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    Sku(id: $id) {
      id
      name
      imageUrl
      salePrice
      promotionalPrice
      quantity
      package
    }
  }
`;
