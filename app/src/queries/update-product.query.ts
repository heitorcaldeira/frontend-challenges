import { gql } from '@apollo/client';

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: ID!
    $quantity: Int
    $salePrice: Int
    $promotionalPrice: Int
    $package: JSON
  ) {
    updateSku(
      id: $id
      quantity: $quantity
      salePrice: $salePrice
      promotionalPrice: $promotionalPrice
      package: $package
    ) {
      quantity
      salePrice
      promotionalPrice
      package
    }
  }
`;
