import styled from 'styled-components';
import { BasicText } from '../../shared/BasicText';
import { BasicContainer } from '../../shared/BasicContainer';
import { BasicWrapper } from '../../shared/BasicWrapper';

export const Text = styled(BasicText)``;

export const Container = styled(BasicContainer)`
  color: black;
`;

export const Wrapper = styled(BasicWrapper)``;

export const Image = styled.img`
  width: 100%;
`;

export const ButtonCircle = styled.button`
  background: #acac35;
  height: 50px;
  width: 50px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 27px;
  border: 5px solid white;
  border-radius: 50%;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 100%;
  height: 40px;
  background: #f8f4f4;
  border: none;
  border-radius: 3px;
`;

export const StyledCheckbox = styled.button`
  display: inline-block;
  padding: 7px 20px 7px 20px;
  margin-left: 35px;
  border: 1px solid #535e4f;
  border-radius: 30px;
  background: ${(props: { checked: boolean }) => (props.checked ? 'salmon' : 'white')};
  transition: all 150ms;
`;
