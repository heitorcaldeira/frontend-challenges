import { gql } from '@apollo/client';

export const PRODUCTS_PAGINATED = gql`
  query GetProductsPaginated($page: Int!, $perPage: Int) {
    allSkus(page: $page, perPage: $perPage) {
      id
      name
      imageUrl
      salePrice
      promotionalPrice
      quantity
    }
  }
`;
