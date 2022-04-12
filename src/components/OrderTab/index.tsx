import React, { useState } from 'react';
import { Container, Wrapper, Text, ApproveButton } from './styles';
import { Button } from '../../shared/Button';

const OrderTab: React.FC = () => {
  const [orderName, setOrderName] = useState('Order 324750ABC');

  return (
    <>
      <Container>
        <Wrapper flexDirection="row">
          <Text padding="0 0 0 0">Orders</Text>
          <Text>{'>'}</Text>
          <Text textDecoration="underline">{orderName}</Text>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper flexDirection="row">
          <Text padding="0 0 0 0" fontSize="30px" fontWeight="bold">
            {orderName}
          </Text>
        </Wrapper>
        <Wrapper flexDirection="row">
          <Button>Back</Button>
          <ApproveButton>Approve Order</ApproveButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default OrderTab;
