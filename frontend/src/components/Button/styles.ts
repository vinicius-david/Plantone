import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #4488aa;
  color: #fff;
  font-weight: 500;

  padding: 16px 0px;
  border-radius: 10px;
  margin-top: 12px;

  width: 100%;

  &:hover {
    transition: 300ms;
    background: ${shade(0.2, '#4488aa')};
  }
`;
