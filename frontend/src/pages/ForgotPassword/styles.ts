import styled, { keyframes } from 'styled-components';

import logInBackground from '../../assets/login-background.png';

const animateOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 20%;

  position: absolute;
  left: 55%;
  top: 15%;
  z-index: 1;

  display: flex;
  flex-direction: column;

  animation: ${animateOpacity} 1.3s;

  form {
    display: flex;
    flex-direction: column;

    max-width: 80%;

    h2 {
      font-size: 24px;
      margin-bottom: 24px;
      font-weight: 500;
    }

    h4 {
      margin-bottom: 8px;
      margin-top: 16px;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;

    text-decoration: none;
    color: #002844;

    &:hover {
      color: #222844;
      font-weight: 500;
    }
  }

  a + a {
    margin-top: 64px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 56px;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 54px;
    font-weight: 300;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background: url(${logInBackground}) no-repeat center;
  background-size: cover;
`;
