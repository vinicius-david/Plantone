import React from 'react';
import { FiChevronsRight, FiActivity, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Header } from './styles';

const LogIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Header>
          <h1>Plantone</h1>
          <h2>Um controle de plantões hospitalares simples e eficiente.</h2>
        </Header>

        <Form onSubmit={handleSubmit}>
          <h2>Faça seu login</h2>

          <h4>Email</h4>
          <Input
            name="email"
            icon={FiActivity}
            placeholder="Digite seu email"
          />

          <h4>Senha</h4>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Digite sua senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot-password">Esqueceu a senha?</a>

          <a href="/choose-login">
            <FiChevronsRight size={24} />
            Cadastre-se
          </a>
        </Form>
      </Container>

      <Background />
    </>
  );
};

export default LogIn;
