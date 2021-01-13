import { gql } from '@apollo/client';

export const PRODUCTS_PAGINATED = gql`
  query GetProductsPaginated($page: Int!) {
    allSkus(page: $page, perPage: 10) {
      id
      name
      imageUrl
      salePrice
      promotionalPrice
      quantity
    }
  }
`;
