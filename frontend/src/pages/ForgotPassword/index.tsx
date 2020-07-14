import React, { useCallback, useRef } from 'react';
import { FiChevronLeft, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Background, Container, Header } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ForgotPasswordFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email inválido')
          .required('Campo obrigatório'),
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
          <h2>Recuperação de senha</h2>

          <h4>Email</h4>
          <Input name="email" icon={FiMail} placeholder="Digite seu email" />

          <Button type="submit">Recuperar</Button>

          <Link to="/">
            <FiChevronLeft size={24} />
            Voltar para o login
          </Link>
        </Form>
      </Container>

      <Background />
    </>
  );
};

export default ForgotPassword;
