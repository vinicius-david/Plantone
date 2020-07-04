import React from 'react';
import { FiChevronsLeft } from 'react-icons/fi';

import {
  Container,
  Header,
  OptionContainer,
  DoctorImage,
  HospitalImage,
} from './styles';

const ChooseRegister: React.FC = () => {
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
          <a href="/doctor-register">Cadastrar como médico</a>
          <h3>
            Como médico, é possível ver todos os hospitais com plantões
            disponíveis e reservar um trabalho.
          </h3>
        </div>

        <div>
          <HospitalImage />
          <a href="/hospital-register">Cadastrar como hospital</a>
          <h3>
            Como hospital, é possível abrir vagas para plantões em datas
            específicas para cada especialidade.
          </h3>
        </div>
      </OptionContainer>
    </Container>
  );
};

export default ChooseRegister;
