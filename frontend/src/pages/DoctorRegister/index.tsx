import React from 'react';
import {
  FiChevronsLeft,
  FiUser,
  FiMail,
  FiPhone,
  FiActivity,
} from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Header, InputsContainer } from './styles';

const DoctorRegister: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <a href="/choose-register">
          <FiChevronsLeft size={32} />
          Voltar
        </a>

        <h1>Cadastrar como médico</h1>
      </Header>

      <InputsContainer>
        <Form onSubmit={handleSubmit}>
          <h4>Nome</h4>
          <Input name="name" placeholder="Digite seu nome" icon={FiUser} />

          <h4>Email</h4>
          <Input name="email" placeholder="Digite seu email" icon={FiMail} />

          <h4>Telefone</h4>
          <Input
            name="phone"
            placeholder="Digite seu telefone"
            icon={FiPhone}
          />

          <h4>Especialidade</h4>
          <Input
            name="area"
            placeholder="Digite sua especialidade"
            icon={FiActivity}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </InputsContainer>
    </Container>
  );
};

export default DoctorRegister;
