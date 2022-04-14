import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px 10px 20px;
  margin-left: 20px;
  border: 1px solid #186239;
  border-radius: 30px;
  color: green;
  font-weight: 900;
  &:hover {
    background-color: #ebc2c2;
  }
  &:active {
    background-color: yellow;
  }
`;

export const ApproveButton = styled(Button)`
  background-color: #186239;
  color: white;
  &:active {
    background-color: black;
  }
`;

export const TextButton = styled.p`
  cursor: pointer;
`;
