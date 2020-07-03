import React from 'react';
import { FiChevronsLeft } from 'react-icons/fi';

import Button from '../../components/Button';

import {
  Container,
  Header,
  OptionContainer,
  DoctorImage,
  HospitalImage,
} from './styles';

const ChooseLogIn: React.FC = () => {
  return (
    <Container>
      <Header>
        <a href="/">
          <FiChevronsLeft size={32} />
          Voltar
        </a>

        <h1>Escolha a forma de cadastro</h1>
      </Header>

      <OptionContainer>
        <div>
          <DoctorImage />
          <Button>Cadastrar como médico</Button>
          <h3>
            Como médico, é possível ver todos os hospitais com plantões
            disponíveis e reservar um trabalho.
          </h3>
        </div>

        <div>
          <HospitalImage />
          <Button>Cadastrar como hospital</Button>
          <h3>
            Como hospital, é possível abrir vagas para plantões em datas
            específicas para cada especialidade.
          </h3>
        </div>
      </OptionContainer>
    </Container>
  );
};

export default ChooseLogIn;
