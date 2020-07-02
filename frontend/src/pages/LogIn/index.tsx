import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';

import { Background, Container, Header, Form, CreateAccount } from './styles';

const LogIn: React.FC = () => (
  <>
    <Container>
      <Header>
        <h1>Plantone</h1>
        <h2>Um controle de plantões hospitalares simples e eficiente.</h2>
      </Header>

      <Form>
        <h2>Faça seu login</h2>

        <h4>Email</h4>
        <input placeholder="Digite seu nome" />

        <h4>Senha</h4>
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Entrar</button>

        <a href="forgot-password">Esqueceu a senha?</a>
      </Form>

      <CreateAccount>
        <FiChevronsRight size={24} />
        <a href="create-accont">Cadastre-se</a>
      </CreateAccount>
    </Container>

    <Background />
  </>
);

export default LogIn;
