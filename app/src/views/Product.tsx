import React from 'react';
import { Container } from '../components/Container';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/Breadcrumb';
import VerticalSpacing from '../components/VerticalSpacing';
import ProductEditor from '../components/ProductEditor';
import { gql, useMutation, useQuery } from '@apollo/client';
import { PRODUCT_BY_ID } from '../queries/product.query';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { UPDATE_PRODUCT } from '../queries/update-product.query';

interface Props {
  productId: string;
}

const Product: React.FC<Props> = () => {
  const { productId } = useParams<Props>();
  const { t } = useTranslation();
  const [dispatchUpdate] = useMutation(UPDATE_PRODUCT, {
    update(cache, { data: { updateSku } }) {
      cache.modify({
        fields: {
          allSkus(existingProducts = []) {
            const updtProduct = cache.writeFragment({
              id: productId,
              data: { ...updateSku },
              fragment: gql`
                fragment UpdateSku on Sku {
                  quantity
                  salePrice
                  promotionalPrice
                  package
                }
              `,
            });
            return [...existingProducts, updtProduct];
          },
        },
      });
    },
  });

  const updateProduct = (product) => {
    dispatchUpdate({ variables: { ...product } });
  };

  const { data, loading } = useQuery(PRODUCT_BY_ID, {
    variables: { id: productId },
  });

  return (
    <Container>
      <Breadcrumb link={'/'} title={t('products')} />
      <VerticalSpacing size={15}>
        {loading && <Loading />}
        {!loading && (
          <ProductEditor
            product={data?.Sku}
            onUpdateProduct={updateProduct}
            isUpdating={false}
          />
        )}
      </VerticalSpacing>
    </Container>
  );
};

export default Product;
