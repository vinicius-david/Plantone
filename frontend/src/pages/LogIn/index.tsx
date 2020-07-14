import React, { useCallback, useRef } from 'react';
import { FiChevronsRight, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Background, Container, Header } from './styles';

interface LogInFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: LogInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email inválido')
          .required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatória'),
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
    <>
      <Container>
        <Header>
          <h1>Plantone</h1>
          <h2>Um controle de plantões hospitalares simples e eficiente.</h2>
        </Header>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Faça seu login</h2>

          <h4>Email</h4>
          <Input name="email" icon={FiMail} placeholder="Digite seu email" />

          <h4>Senha</h4>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Digite sua senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot-password">Esqueceu a senha?</a>

          <a href="/choose-register">
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
