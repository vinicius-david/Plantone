import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  FiChevronsLeft,
  FiUser,
  FiMail,
  FiPhone,
  FiActivity,
  FiAnchor,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import axios from 'axios';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Header, FormContainer } from './styles';

interface IBGEUF {
  sigla: string;
}

interface IBGECity {
  nome: string;
}

const HospitalRegister: React.FC = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState<string>('0');
  const [selectedCity, setSelectedCity] = useState<string>('0');

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

          <select
            name="uf"
            id="uf"
            onChange={handleSelectUf}
            value={selectedUf}
          >
            <option value="0">Selecione um estado</option>
            {ufs.map(uf => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>

          <h4>Cidade</h4>

          <select
            name="city"
            id="city"
            onChange={handleSelectCity}
            value={selectedCity}
          >
            <option value="0">Selecione uma cidade</option>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

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
