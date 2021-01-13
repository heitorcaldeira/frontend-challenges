import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../components/Container';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { PRODUCTS_PAGINATED } from '../queries/products.query';
import Loading from '../components/Loading/Loading';

export const HomeContainer = styled.div`
  h1 {
    font-weight: 400;
    font-size: 21px;
    color: ${(props) => props.theme.textColor};
  }

  .header {
    display: flex;
  }
`;

const Home: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const loader = useRef(null);

  const { data, loading } = useQuery(PRODUCTS_PAGINATED, {
    variables: { page, perPage: 10 },
  });

  const handleObserver = (entities) => {
    const target = entities[0];

    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      observer.observe(loader.current as any);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current as any);
      }
    };
  }, []);

  useEffect(() => {
    const list = data?.allSkus || [];

    setProducts((products) => [...products, ...list] as any);
  }, [page, data?.allSkus]);

  return (
    <HomeContainer>
      <Container>
        <h1>{t('products')}</h1>
        <ProductList products={products} />
        <div className='loading' ref={loader}>
          {loading && <Loading />}
        </div>
      </Container>
    </HomeContainer>
  );
});

export default Home;
