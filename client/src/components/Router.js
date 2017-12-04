import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';

import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route component={App}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;