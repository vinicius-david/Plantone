import styled from 'styled-components';

import logInBackground from '../../assets/background.png';

export const Container = styled.div`
  width: 20%;

  position: absolute;
  left: 55%;
  top: 15%;
  z-index: 1;

  display: flex;
  flex-direction: column;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 80%;

  h2 {
    font-size: 24px;
    margin-bottom: 24px;
    font-weight: 500;
  }

  input {
    margin-top: 8px;
    padding: 12px 8px;
  }

  input + h4 {
    margin-top: 24px;
  }

  button {
    background: #4488aa;
    color: #fff;
    font-weight: 500;

    padding: 16px 0px;
    border-radius: 10px;
    margin-top: 24px;
  }

  button:hover {
    transition: 300ms;
    background: #2288aa;
  }

  a {
    text-decoration: none;
    text-align: center;
    margin-top: 16px;
    color: #002844;
  }

  a:hover {
    color: #222844;
    font-weight: 500;
  }
`;

export const CreateAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 80%;
  margin-top: 15%;

  a {
    text-decoration: none;
    text-align: center;
    color: #002844;
  }

  a:hover {
    color: #222844;
    font-weight: 500;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background: url(${logInBackground}) no-repeat center;
  background-size: cover;
`;
