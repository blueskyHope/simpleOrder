import React from 'react';
import styled from 'styled-components';
import { PageItemWrapper } from './ItemWrapper';

const Wrapper = styled(PageItemWrapper)`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  width: ${(props) => (props.width ? props.width : null)};
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1em;
  color: #e2e2e2;
`;

const Content = styled.div`
  font-weight: bolder;
  font-size: 1.28em;
  color: #222222;
`;

const ItemView = styled.div`
  border-right: 2px solid #e2e2e2;
`;
interface Props {
  className?: string;
  title?: string;
}
const DashItem: React.FC<Props> = ({ className, children, title }) => {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <ItemView>
        <Wrapper flexDirection="column">
          <Title>{title}</Title>
        </Wrapper>
        <Wrapper flexDirection="column">
          <Content>{children}</Content>
        </Wrapper>
      </ItemView>
    </div>
  );
};

export default DashItem;
