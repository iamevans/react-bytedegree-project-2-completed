import React from 'react';
import styled from 'styled-components';

import { ExpensebookHead } from './ExpensebookHead';
import { ExpensebookFilter } from './ExpensebookFilter';
import { ExpenseItemList } from './ExpenseItemList';
import { CreateItemButton } from './CreateItemButon';
import { CreateItemDialog } from './CreateItemDialog';
import { DeleteItemDialog } from './DeleteItemDialog';
import { ModifyItemDialog } from './ModifyItemDialog';

import { useDialogDispatch } from '../contexts/DialogContext';

const PageBody = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 24rem;
  height: 40rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  overflow-y: scroll;
`;

export const ExpensebookPage = () => {
  const dialogDispatch = useDialogDispatch();

  const handleCreateButtonClick = () =>
    dialogDispatch({ type: 'OPEN_CREATE_DIALOG' });

  return (
    <>
      <PageBody>
        <ExpensebookHead />
        <ExpensebookFilter />
        <ExpenseItemList />
        <CreateItemButton onClick={handleCreateButtonClick} />
      </PageBody>
      <CreateItemDialog />
      <ModifyItemDialog />
      <DeleteItemDialog />
    </>
  );
};

ExpensebookPage.defaultProps = {};

ExpensebookPage.displayName = 'ExpensebookPage';
