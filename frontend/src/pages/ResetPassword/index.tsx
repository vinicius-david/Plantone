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

interface ResetPasswordFormData {
  email: string;
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Email inválido')
            .required('Campo obrigatório'),
          password: Yup.string().required('Campo obrigatório'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Senhas diferentes',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('reset-password', {
          data,
        });

        addToast({
          type: 'success',
          title: 'Senha redefinida!',
          description: 'Você já pode realizar o login!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro ao redefinir a senha',
          description: 'Não foi possível redefinir sua senha, tente novamente.',
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
          <h2>Resetar senha</h2>

          <h4>Email</h4>
          <Input name="email" icon={FiMail} placeholder="Digite seu email" />

          <h4>Nova Senha</h4>
          <Input name="password" icon={FiMail} placeholder="Nova senha" />

          <h4>Confirmar senha</h4>
          <Input
            name="password_confirmation"
            icon={FiMail}
            placeholder="Repetir senha"
          />

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

export default ResetPassword;
