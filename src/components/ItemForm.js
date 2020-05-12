import React from 'react';
import styled from 'styled-components';

import { ocGray9 } from '../constants/style';

const Form = styled.form`
  margin: 0;
  padding: 1rem;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  color: ${ocGray9};

  label {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input {
    height: 1.5rem;
  }

  select {
    height: 2rem;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const ItemForm = ({ formValues, onChangeField }) => {
  const { title, amount, category } = formValues;

  return (
    <Form>
      <InputField>
        <label htmlFor="title">내용</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={onChangeField}
        />
      </InputField>
      <InputField>
        <label htmlFor="amount">금액</label>
        {/* NOTE: (Extra point) number 타입을 쓰지 않고 숫자만 입력받을 수 있게 구현해보기 */}
        <input
          name="amount"
          type="number"
          min={0}
          value={amount}
          onChange={onChangeField}
        />
      </InputField>
      <InputField>
        <label htmlFor="category">카테고리</label>
        <select name="category" value={category} onChange={onChangeField}>
          <option value="meal">식사</option>
          <option value="grocery">식료품</option>
          <option value="transportation">교통</option>
          <option value="housekeeping">생활</option>
          <option value="medical">의료</option>
        </select>
      </InputField>
    </Form>
  );
};

ItemForm.defaultProps = {
  formValues: {
    title: '',
    amount: 0,
    category: 'meal',
  },
  onChangeField: () => {},
};

ItemForm.displayName = 'ItemForm';
