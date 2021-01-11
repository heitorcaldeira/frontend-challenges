import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container/Container';

const Home: React.FC = () => {
  return (
    <Container>
      <Link to={'product/123'}>Go to Product 123</Link>
    </Container>
  );
};

export default Home;
