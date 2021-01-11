import React from 'react';
import { Container } from '../components/Container';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import { Product } from '../models/product.model';

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

const Home: React.FC = () => {
  const products: Product[] = [
    {
      id: 17,
      name: 'Pen Drive Usb 16gb Otg 3em1 C/cartao Microsd Unidade U-tech',
      ean: '7898597390658',
      category: 'Eletrônicos',
      imageUrl:
        'https://images-shoptime.b2w.io/produtos/01/00/oferta/56869/1/56869194G1.jpg',
      description:
        'Pen Drive + Cartão de Memória Micro-Sd Otg U-Tech 16GB PretoTransfira arquivos facilmente de seu smartphone ou tablet diretamente para um computador. Sistema Operacional Compatível: Linux, Macintosh, Microsoft Windows',
      package: {
        height: 1,
        width: 10,
        depth: 12,
        weight: 300,
      },
      salePrice: 4500,
      promotionalPrice: 4500,
      quantity: 1,
    },
    {
      id: 18,
      name: 'Livro - Sol da meia-noite: (Midnight Sun) - Série Crepúsculo',
      ean: '9786555600292',
      category: 'Livros',
      imageUrl: null,
      description:
        'Aguardado há mais de uma década, &lt;i&gt;Sol da meia-noite&lt;/i&gt;, novo livro do universo de &lt;i&gt;Crepúsculo&lt;/i&gt;, chega ao Brasil em lançamento mundial no dia 4 de agosto',
      package: {
        height: 23,
        width: 16,
        depth: 4,
        weight: 1030,
      },
      salePrice: 5490,
      promotionalPrice: 5490,
      quantity: 2,
    },
  ];
  return (
    <HomeContainer>
      <Container>
        <h1>Produtos</h1>
        <ProductList products={products} />
      </Container>
    </HomeContainer>
  );
};

export default Home;
