import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { MdAdd } from 'react-icons/md';

import { ocCyan8 } from '../constants/style';

const ItemButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 0;
  outline: 0;
  border-radius: 50%;
  background: ${ocCyan8};

  &:hover {
    background: ${lighten(0.1, ocCyan8)};
  }

  &:active {
    background: ${darken(0.1, ocCyan8)};
  }
`;

export const CreateItemButton = props => {
  return (
    <ItemButton {...props}>
      <MdAdd size="4rem" color="white" />
    </ItemButton>
  );
};

CreateItemButton.defaultProps = {};

CreateItemButton.displayName = 'CreateItem';
