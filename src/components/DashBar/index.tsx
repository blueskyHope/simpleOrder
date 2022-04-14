import React from 'react';
import { Container, Wrapper } from './styles';
import { Card, CardBody, CardHeader } from '../../shared/Card';
import DashItem from '../../shared/DashItem';

const Dashbar: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Wrapper flexDirection="row" width="20%" height="100%">
            <DashItem title="Supplier">
              <p>East coast fruits & vegetables</p>
            </DashItem>
          </Wrapper>
          <Wrapper flexDirection="row" width="15%" height="100%">
            <DashItem title="Shipping data">
              <p>Thu, Feb 10</p>
            </DashItem>
          </Wrapper>
          <Wrapper flexDirection="row" width="15%" height="100%">
            <DashItem title="Total">
              <p>$ 15,028.3</p>
            </DashItem>
          </Wrapper>
          <Wrapper flexDirection="row" width="15%" height="100%">
            <DashItem title="category">
              <p>Hello</p>
            </DashItem>
          </Wrapper>
          <Wrapper flexDirection="row" width="15%" height="100%">
            <DashItem title="Department">
              <p>300-444-678</p>
            </DashItem>
          </Wrapper>
          <Wrapper flexDirection="row" width="20%" height="100%">
            <DashItem title="Status">
              <p>Awaiting your approvel</p>
            </DashItem>
          </Wrapper>
        </CardHeader>
      </Card>
    </>
  );
};

export default Dashbar;
