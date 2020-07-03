import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: left;

  border-radius: 8px;

  background: #fff;
  border: 2px solid #fff;
  color: #aaaaff;

  svg {
    margin-left: 8px;
  }

  input {
    padding: 16px 0;
    margin-left: 8px;
    background: #fff;
    width: 100%;

    border-radius: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: ${shade(0.2, '#4488aa')};
      border-color: ${shade(0.2, '#4488aa')};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${shade(0.2, '#4488aa')};
    `}
`;
