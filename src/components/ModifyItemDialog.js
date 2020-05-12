import React, { useEffect, useMemo } from 'react';
import { Dialog } from './Dialog';
import { ItemForm } from './ItemForm';

import {
  useExpenseDispatch,
  useExpenseState,
} from '../contexts/ExpenseContext';
import { useDialogDispatch, useDialogState } from '../contexts/DialogContext';
import { useInput } from '../hooks/useInput';

export const ModifyItemDialog = () => {
  const { expenses } = useExpenseState();
  const expenseDispatch = useExpenseDispatch();
  const { modify: isVisible, modifyTargetId } = useDialogState();
  const dialogDispatch = useDialogDispatch();
  const targetItem = useMemo(
    () => expenses.find(expense => expense.id === modifyTargetId),
    [expenses, modifyTargetId]
  );
  const { form, onChangeField, setForm } = useInput(targetItem);

  const handleModifyCancel = () => dialogDispatch({ type: 'CLOSE_DIALOG' });
  const handleModifyConfirm = () => {
    expenseDispatch({ type: 'MODIFY_ITEM', ...form });
    handleModifyCancel();
  };

  useEffect(() => {
    if (targetItem) {
      setForm(targetItem);
    }
  }, [setForm, targetItem]);

  return (
    <Dialog
      visible={isVisible}
      title="지출 수정"
      confirmText="수정"
      onCancel={handleModifyCancel}
      onConfirm={handleModifyConfirm}
    >
      <ItemForm onChangeField={onChangeField} formValues={form} />
    </Dialog>
  );
};

ModifyItemDialog.defaultProps = {};

ModifyItemDialog.displayName = 'ModifyItemDialog';
