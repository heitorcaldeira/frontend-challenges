import { lazy } from 'react';

const Home = lazy(() => import('../views/Home'));
const Product = lazy(() => import('../views/Product'));

const routes = () => {
  return [
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
      path: '/product/:productId',
      component: Product,
    },
  ];
};

export default routes;
