import React, { useCallback, useRef } from 'react';
import {
  FiChevronsLeft,
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiActivity,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { Container, Header, InputsContainer } from './styles';

interface DoctorRegisterFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
  specialty: string;
}

const DoctorRegister: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: DoctorRegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Campo obrigatório'),
          email: Yup.string()
            .email('Email inválido')
            .required('Campo obrigatório'),
          password: Yup.string().required('Campo obrigatório'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Senhas diferentes',
          ),
          phone: Yup.string().required('Campo obrigatório'),
          specialty: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/doctor', {
          data,
        });

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Você ja pode fazer seu login!.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Não foi possível realizar o cadastro, tente novamente.',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Header>
        <Link to="/choose-register">
          <FiChevronsLeft size={32} />
          Voltar
        </Link>

        <h1>Cadastrar como médico</h1>
      </Header>

      <InputsContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h4>Nome</h4>
          <Input name="name" placeholder="Digite seu nome" icon={FiUser} />

          <h4>Email</h4>
          <Input name="email" placeholder="Digite seu email" icon={FiMail} />

          <h4>Senha</h4>
          <Input
            name="password"
            type="password"
            placeholder="Escolha uma senha"
            icon={FiLock}
          />

          <h4>Confirmar senha</h4>
          <Input
            name="password_confirmation"
            type="password"
            placeholder="Confirme a senha"
            icon={FiLock}
          />

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
