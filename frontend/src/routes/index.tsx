import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LogIn from '../pages/LogIn';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import ChooseRegister from '../pages/ChooseRegister';
import DoctorRegister from '../pages/DoctorRegister';
import HospitalRegister from '../pages/HospitalRegister';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LogIn} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/choose-register" component={ChooseRegister} />
    <Route path="/doctor-register" component={DoctorRegister} />
    <Route path="/hospital-register" component={HospitalRegister} />
  </Switch>
);

export default Routes;
