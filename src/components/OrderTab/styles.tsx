import styled from 'styled-components';
import { PageText as NavText } from '../../shared/PageText';
import { PageItemWrapper as NavItemWrapper } from '../../shared/ItemWrapper';
import { Button } from '../../shared/Button';

export const Text = styled(NavText)`
  color: ${(props) => (props.color ? props.color : '#000000')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
  padding: ${(props) => (props.padding ? props.padding : '0 0 0 20px')};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'null')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'null')};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background-color: white;
  padding: 0.5% 8% 0.5% 8%;
  width: 100%;
  box-shadow: 5px 5px 5px lightblue;
  z-index: 10;
`;

export const Wrapper = styled(NavItemWrapper)`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  cursor: pointer;
`;

export const ApproveButton = styled(Button)`
  background-color: #186239;
  color: white;
  &:active {
    background-color: black;
  }
`;
