import React, { useCallback, useRef } from 'react';
import {
  FiChevronsLeft,
  FiUser,
  FiMail,
  FiPhone,
  FiActivity,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Header, InputsContainer } from './styles';

interface DoctorRegisterFormData {
  name: string;
  email: string;
  phone: string;
  specialty: string;
}

const DoctorRegister: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: DoctorRegisterFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string()
          .email('Email inválido')
          .required('Campo obrigatório'),
        phone: Yup.string().required('Campo obrigatório'),
        specialty: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

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
        <Form ref={formRef} onSubmit={handleSubmit}>
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
            name="specialty"
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
