import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};
const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

// fullWidth, outline 등은 사용하지 않을 것이므로 구현 생략
const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.buttonColors[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  ${sizeStyles}
  ${colorStyles}

  & + & {
    margin-left: 0.75rem;
  }
`;

export const Button = ({ children, color, size, ...rest }) => {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'indigo',
  size: 'medium',
};

Button.displayName = 'Button';
