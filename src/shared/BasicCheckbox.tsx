import styled from 'styled-components';

export const BasicCheckbox = styled.button`
  display: inline-block;
  border: 1px solid #535e4f;
  border-radius: 30px;
  background: ${(props: { checked?: boolean }) => (props.checked ? 'salmon' : 'white')};
  transition: all 150ms;
`;
