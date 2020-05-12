import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';

const DimmedBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBody = styled.section`
  width: 20rem;
  padding: 1.5rem;
  background: white;
  border-radius: 4px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const Dialog = ({
  visible,
  children,
  title,
  cancelText,
  confirmText,
  confirmType,
  onConfirm,
  onCancel,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <DimmedBackground>
      <DialogBody>
        <h3>{title}</h3>
        {children}
        <ButtonGroup>
          <Button color="gray" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button
            color={confirmType === 'danger' ? 'pink' : 'indigo'}
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </ButtonGroup>
      </DialogBody>
    </DimmedBackground>
  );
};

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
  confirmType: 'normal',
  onConfirm: () => {},
  onCancel: () => {},
};

Dialog.displayName = 'Dialog';
