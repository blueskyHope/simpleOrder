import styled from 'styled-components';
import { PageItemWrapper } from '../../shared/ItemWrapper';

export const Wrapper = styled(PageItemWrapper)`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  width: ${(props) => (props.width ? props.width : null)};
  cursor: pointer;
`;
