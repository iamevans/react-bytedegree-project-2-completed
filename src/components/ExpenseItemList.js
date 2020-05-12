import React from 'react';
import styled from 'styled-components';

import { ExpenseItem } from './ExpenseItem';

import { useExpenseState } from '../contexts/ExpenseContext';

const ItemListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-top: 1rem;
`;

export const ExpenseItemList = () => {
  const { expenses, currentFilter, filteredExpenses } = useExpenseState();

  return (
    <ItemListWrapper>
      {(currentFilter === 'all' ? expenses : filteredExpenses).map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ItemListWrapper>
  );
};

ExpenseItemList.defaultProps = {};

ExpenseItemList.displayName = 'ExpenseItemList';
