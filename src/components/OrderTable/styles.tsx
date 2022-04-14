import styled from 'styled-components';
import { BasicText } from '../../shared/BasicText';
import { BasicWrapper } from '../../shared/BasicWrapper';
import { BasicContainer } from '../../shared/BasicContainer';
import { BasicCheckbox } from '../../shared/BasicCheckbox';
import { ModalContainer } from '../../shared/ModalContainer';

export const Text = styled(BasicText)``;

export const Wrapper = styled(BasicWrapper)`
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  width: ${(props) => (props.width ? props.width : null)};
`;

export const Container = styled(BasicContainer)`
  padding-top: 600px;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #f8f4f4;
  height: 100vh;
  overflow: auto;
`;

export const ApproveCheckbox = styled(BasicCheckbox)`
  padding: 10px 20px 10px 20px;
  background-color: #dbdb37;
`;

export const MissingCheckbox = styled(BasicCheckbox)`
  padding: 10px 20px 10px 20px;
  background-color: #b83535;
`;

export const MissingUrgentCheckbox = styled(BasicCheckbox)`
  padding: 10px 20px 10px 20px;
  background-color: red;
`;

export const MissingModalContainer = styled(ModalContainer)`
  width: 30%;
  min-width: 300px;
`;
