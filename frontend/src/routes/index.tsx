import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LogIn from '../pages/LogIn';
import ChooseLogIn from '../pages/ChooseLogIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LogIn} />
    <Route path="/choose-login" component={ChooseLogIn} />
  </Switch>
);

export default Routes;
