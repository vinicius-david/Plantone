import React, { useCallback, useRef } from 'react';
import { FiChevronLeft, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { Background, Container, Header } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
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

        await api.post('forgot-password', {
          data,
        });

        addToast({
          type: 'success',
          title: 'Email de recuperação de senha enviado!',
          description:
            'Verifique sua caixa de entrada para definir uma nova senha.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Não foi possível fazer a recuperação de senha, tente novamente.',
        });
      }
    },
    [addToast],
  );

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
