import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

interface SelectProps {
  hasError: boolean;
}

const animateOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100vw;
  height: 20vh;

  display: flex;
  align-items: center;

  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    margin-left: 5%;

    text-decoration: none;

    color: #002844;
    font-size: 18px;

    width: 5%;
  }

  a:hover {
    color: ${shade(0.2, '#002844')};
    font-weight: 500;
  }

  h1 {
    font-size: 56px;
    margin-left: 21%;
  }
`;

export const FormContainer = styled.div`
  width: 740px;
  max-height: 700px;

  animation: ${animateOpacity} 0.8s;

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    height: 80%;
    width: 740px;

    margin-top: 32px;

    h4 {
      font-size: 22px;
      margin-bottom: 8px;
      margin-top: 16px;
      max-width: 370px;
    }

    div {
      max-width: 300px;
    }

    select {
      background: #fff;
      color: #777;

      max-width: 300px;
      border-radius: 8px;
      height: 54px;
      padding: 8px;
    }

    button {
      max-width: 300px;
      margin-top: 56px;
    }
  }
`;

export const Select = styled.select<SelectProps>`
  ${props =>
    props.hasError &&
    css`
      border: 2px solid ${shade(0.2, '#c53030')};
    `}
`;
