import React from 'react';
import {
  FiChevronsLeft,
  FiUser,
  FiMail,
  FiPhone,
  FiActivity,
  FiMap,
  FiCloud,
  FiAnchor,
} from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Header, FormContainer } from './styles';

const HospitalRegister: React.FC = () => {
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

        <h1>Cadastrar como hospital</h1>
      </Header>

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h4>Nome</h4>
          <Input
            name="name"
            placeholder="Digite o nome do hospital"
            icon={FiUser}
          />

          <h4>Email</h4>
          <Input name="email" placeholder="Digite seu email" icon={FiMail} />

          <h4>Telefone</h4>
          <Input
            name="phone"
            placeholder="Digite seu telefone"
            icon={FiPhone}
          />

          <h4>Especialidades</h4>
          <Input
            name="areas"
            placeholder="Digite as especialidades atendidas"
            icon={FiActivity}
          />

          <h4>Estado</h4>
          <Input name="uf" placeholder="Escolha a UF" icon={FiMap} />

          <h4>Cidade</h4>
          <Input name="city" placeholder="Escolha a cidade" icon={FiCloud} />

          <h4>Endereço</h4>
          <Input
            name="adress"
            placeholder="Digite o endereço completo"
            icon={FiAnchor}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default HospitalRegister;
