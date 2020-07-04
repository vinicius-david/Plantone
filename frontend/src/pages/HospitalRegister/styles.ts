import styled from 'styled-components';
import { shade } from 'polished';

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
    margin-left: 20%;
  }
`;

export const FormContainer = styled.div`
  width: 40vw;
  margin-top: 16px;

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    height: 55%;
    width: 40vw;

    h4 {
      font-size: 22px;
      margin-bottom: 8px;
      margin-top: 8px;
    }

    div {
      margin-right: 24px;
      max-width: 300px;
    }

    button {
      max-width: 300px;
      margin-top: 44px;
    }
  }
`;
