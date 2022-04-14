import styled from 'styled-components';
import { PageItemWrapper } from '../../shared/ItemWrapper';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #f8f4f4;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding-top: 40vh;
  padding-bottom: 10vh;
`;

export const Wrapper = styled(PageItemWrapper)`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  cursor: pointer;
`;
