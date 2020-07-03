import styled from 'styled-components';

import doctorImage from '../../assets/doctor-icon.png';
import hospitalImage from '../../assets/hospital-icon.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100vw;
  height: 20vh;

  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    margin-left: 5%;

    text-decoration: none;

    color: #002844;
    font-size: 18px;
  }

  a:hover {
    font-weight: 500;
  }

  h1 {
    font-size: 56px;
    margin-left: 20%;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px;

    &:hover {
      transition: 300ms;
      background-color: #cceeff;
      transform: translateY(-3px);
    }

    button {
      width: 360px;
    }

    h3 {
      margin-top: 32px;
      width: 360px;
    }
  }
`;

export const DoctorImage = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 50%;
  margin-bottom: 54px;

  background: url(${doctorImage}) no-repeat center;
`;

export const HospitalImage = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 50%;
  margin-bottom: 54px;

  background: url(${hospitalImage}) no-repeat center;
`;
