import React from 'react';
import styled from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';

import {
  ocGray7,
  ocRed8,
  ocYellow2,
  ocLime2,
  ocOrange2,
  ocGrape3,
  ocBlue3,
  ocIndigo8,
} from '../constants/style';
import tags from '../constants/tags';
import { useDialogDispatch } from '../contexts/DialogContext';

const ItemBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.75rem;

  p,
  strong {
    display: inline-block;
    height: 100%;
    margin: 0;
    padding: 0 1rem;
    line-height: 2.75rem;
  }

  p.item-title {
    color: ${ocGray7};
    font-weight: bold;
  }

  strong.item-amount {
    margin: 0 1rem 0 auto;
    padding: 0 0 0 1rem;
    font-size: 1.125rem;
    color: ${ocRed8};
  }

  & + & {
    margin-top: 0.5rem;
  }
`;

const tagBackgroundColors = {
  meal: ocYellow2,
  grocery: ocLime2,
  transportation: ocOrange2,
  housekeeping: ocGrape3,
  medical: ocBlue3,
};
const ItemTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
  border-radius: 0.5rem;
  background: ${({ tag = 'meal' }) => tagBackgroundColors[tag]};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;

  &:hover > svg {
    stroke: ${ocIndigo8};
    fill: ${ocIndigo8};
  }

  &.danger:hover > svg {
    stroke: ${ocRed8};
    fill: ${ocRed8};
  }
`;

export const ExpenseItem = ({ id, category, title, amount }) => {
  const dialogDispatch = useDialogDispatch();

  const handleEditClick = () =>
    dialogDispatch({ type: 'OPEN_MODIFY_DIALOG', id });
  const handleDeleteClick = () =>
    dialogDispatch({ type: 'OPEN_DELETE_DIALOG', id });

  return (
    <ItemBody>
      <ItemTag tag={category}>{tags[category]}</ItemTag>
      <p className="item-title">{title}</p>
      <strong className="item-amount">-{amount}원</strong>

      <Icon onClick={handleEditClick}>
        <MdEdit size="1.5rem" />
      </Icon>
      <Icon className="danger" onClick={handleDeleteClick}>
        <MdDelete size="1.5rem" />
      </Icon>
    </ItemBody>
  );
};

ExpenseItem.defaultProps = {
  category: 'meal',
  title: '',
  amount: '',
};

ExpenseItem.displayName = 'ExpenseItem';
