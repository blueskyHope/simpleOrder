import styled from 'styled-components';
import { PageText as NavText } from '../../shared/PageText';
import { PageItemWrapper as NavItemWrapper } from '../../shared/ItemWrapper';

export const Text = styled(NavText)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
  padding: ${(props) => (props.padding ? props.padding : '0 0 0 60px')};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #205f07;
  padding: 0 8% 0 8%;
  width: 100%;
`;

export const Wrapper = styled(NavItemWrapper)`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  cursor: pointer;
`;

export const Searchbox = styled.input`
  background-color: #ffffff;
  padding: 0.78em;
  width: 47%;
  border: none;

  @media (max-width: 850px) {
    border-radius: 0.2em;
    margin: 0.3em 0;
  }
`;

export const Select = styled.select`
  background-color: #ddd;
  margin-right: -1.2em;
  padding: 0.72em 0.5em;
  border-radius: 0.2em 0em 0em 0.2em;
  border: none;
  cursor: pointer;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const SearchIconWrapper = styled.span`
  background-color: #fabd60;
  color: #131a22;
  margin-left: -1em;
  border-radius: 0em 0.2em 0.2em 0em;
  padding: 0.32em 0.5em;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    background-color: #ff9900;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;
