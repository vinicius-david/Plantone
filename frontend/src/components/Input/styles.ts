import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  border-radius: 8px;

  background: #fff;
  border: 2px solid #fff;
  color: #aaaaff;

  &:hover {
    transition: 300ms;
    border-color: ${shade(0.2, '#4488aa')};
  }

  svg {
    margin-left: 8px;
    margin-right: 8px;
  }

  input {
    padding: 16px 0;
    background: #fff;
    width: 75%;

    border-radius: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${shade(0.3, '#c53030')};
    `}

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

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin-right: 12px;
  }

  span {
    background: ${shade(0.3, '#c53030')};
    color: #eee;

    &::before {
      border-color: ${shade(0.3, '#c53030')} transparent;
    }
  }
`;
