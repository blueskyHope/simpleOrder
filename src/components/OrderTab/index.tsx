import React, { useEffect } from 'react';
import { Container, Wrapper, Text } from './styles';
import { Button, ColorButton } from '../../shared/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from '../../store/orderSlice';
import { getFilteredProducts } from '../../store/productsSlice';
import { RootState, AppDispatch } from '../../store';

const OrderTab: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const order = useSelector((state: RootState) => state.orderState.order);
  const products = useSelector((state: RootState) => state.productsState.products);

  useEffect(() => {
    dispatch(getOrder());
    dispatch(getFilteredProducts('b'));
  }, [dispatch]);

  return (
    <>
      <Container>
        <Wrapper flexDirection="row">
          <Text padding="0 0 0 0">Orders</Text>
          <Text>{'>'}</Text>
          {order?.id && <Text textDecoration="underline">Order {order.id}</Text>}
        </Wrapper>
      </Container>
      <Container>
        <Wrapper flexDirection="row">
          {order?.id && (
            <Text padding="0 0 0 0" fontSize="30px" fontWeight="bold">
              Order {order.id}
            </Text>
          )}
        </Wrapper>
        <Wrapper flexDirection="row">
          <Button>Back</Button>
          <ColorButton>Approve Order</ColorButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default OrderTab;
