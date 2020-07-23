import React, {
  useState,
  useEffect,
  ChangeEvent,
  useCallback,
  useRef,
} from 'react';
import {
  FiChevronsLeft,
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiActivity,
  FiMap,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import axios from 'axios';

import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Header, FormContainer, Select } from './styles';
import api from '../../services/api';

interface IBGEUF {
  sigla: string;
}

interface IBGECity {
  nome: string;
}

interface HospitalRegisterFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
  specialties: string;
  adress: string;
}

const HospitalRegister: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState<string>('0');
  const [selectedCity, setSelectedCity] = useState<string>('0');
  const [ufError, setUfError] = useState(false);
  const [cityError, setCityError] = useState(false);

  useEffect(() => {
    axios
      .get<IBGEUF[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then(response => {
        const ufsInitials = response.data.map(uf => uf.sigla);

        setUfs(ufsInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') setCities([]);

    axios
      .get<IBGECity[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then(response => {
        const ufCities = response.data.map(city => city.nome);

        setCities(ufCities);
      });
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const ufSelection = event.target.value;

    setSelectedUf(ufSelection);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const citySelection = event.target.value;

    setSelectedCity(citySelection);
  }

  const handleSubmit = useCallback(
    async (data: HospitalRegisterFormData) => {
      try {
        formRef.current?.setErrors({});
        setUfError(false);
        setCityError(false);

        if (selectedUf === '0') setUfError(true);
        if (selectedCity === '0') setCityError(true);

        const location = {
          uf: selectedUf,
          city: selectedCity,
        };

        Object.assign(data, location);

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
          specialties: Yup.string().required('Campo obrigatório'),
          adress: Yup.string().required('Campo obrigatório'),
          uf: Yup.string().min(2),
          city: Yup.string().min(2),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = {
          ...data,
          uf: selectedUf,
          city: selectedCity,
        };

        await api.post('/hospital', {
          formData,
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
    [selectedUf, selectedCity, addToast],
  );

  return (
    <Container>
      <Header>
        <Link to="/choose-register">
          <FiChevronsLeft size={32} />
          Voltar
        </Link>

        <h1>Cadastrar como hospital</h1>
      </Header>

      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h4>Nome</h4>
          <Input
            name="name"
            placeholder="Digite o nome do hospital"
            icon={FiUser}
          />

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

          <h4>Especialidades</h4>
          <Input
            name="specialties"
            placeholder="Especialidades atendidas"
            icon={FiActivity}
          />

          <h4>Estado</h4>

          <Select
            name="uf"
            id="uf"
            onChange={handleSelectUf}
            value={selectedUf}
            hasError={ufError}
          >
            <option value="0">Selecione um estado</option>
            {ufs.map(uf => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </Select>

          <h4>Cidade</h4>

          <Select
            name="city"
            id="city"
            onChange={handleSelectCity}
            value={selectedCity}
            hasError={cityError}
          >
            <option value="0">Selecione uma cidade</option>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>

          <h4>Endereço</h4>
          <Input
            name="adress"
            placeholder="Digite o endereço completo"
            icon={FiMap}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default HospitalRegister;
