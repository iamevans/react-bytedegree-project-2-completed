import React from 'react';
import styled from 'styled-components';

import { ocGray5, ocGray9 } from '../constants/style';
import { useExpenseDispatch } from '../contexts/ExpenseContext';

const FilterRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem 0;
  color: ${ocGray9};
  border-bottom: 1px solid ${ocGray5};

  label {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  select {
    margin-left: 0.5rem;
    height: 100%;
  }
`;

export const ExpensebookFilter = () => {
  const dispatch = useExpenseDispatch();

  const handleFilterChange = e => {
    const value = e.target.value;
    dispatch({
      type: 'FILTER_ITEM',
      filter: value,
    });
  };

  return (
    <FilterRow>
      <label htmlFor="filter">카테고리별로 보기: </label>
      <select
        name="filter"
        id="expensebook-filter"
        onChange={handleFilterChange}
      >
        <option value="all">전체</option>
        <option value="meal">식사</option>
        <option value="grocery">식료품</option>
        <option value="transportation">교통</option>
        <option value="housekeeping">생활</option>
        <option value="medical">의료</option>
      </select>
    </FilterRow>
  );
};

ExpensebookFilter.defaultProps = {};

ExpensebookFilter.displayName = 'ExpensebookFilter';
