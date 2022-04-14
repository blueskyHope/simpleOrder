import styled from 'styled-components';
import { SearchIcon } from './Icons';

const SearchBox = styled.div`
  background-color: #ffffff;
  padding: 0.48em 0.28em 0.48em 0.78em;
  width: 100%;
  display: flex;
  color: #929292;
  align-items: center;
  border-radius: 2em;
  border: 1px solid #e2e2e2;
  outline: none;
  @media (max-width: 850px) {
    border-radius: 0.2em;
    margin: 0.3em 0;
  }
`;

const SearchInput = styled.input`
  width: 90%;
  outline: none;
  border: none;
  font-size: 100%;
  font-weight: 400;
  height: 100%;
`;

export const Select = styled.select`
  background-color: #ddd;
  margin-right: -1.2em;
  padding: 0.72em 0.5em;
  border-radius: 0.2em 0em 0em 0.2em;
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

import React from 'react';

interface Props {
  className?: string;
  placeholder?: string;
}

export const SearchGroup: React.FC<Props> = ({ className, placeholder }) => {
  return (
    <SearchBox className={className}>
      <SearchInput placeholder={placeholder}></SearchInput>
      <SearchIcon />
    </SearchBox>
  );
};
