import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';

import FormatOne from './FormatOne';
import FormatTwo from './FormatTwo';
import FormatThree from './FormatThree';
import Timetable from './Timetable';

const Router = () => {
  const style = {
    app: {
      height: '100%',
      width: '100%'
    },
    pages: {
      height: '100%',
      width: '100%',
      paddingTop: '56px'
    }
  };

  return (
    <BrowserRouter>
      <div style={style.app}>
        <NavBar/>
        <div style={style.pages}>
          <Switch>
            <Route exact path='/' component={FormatOne}/>
            <Route exact path='/f1' component={FormatOne}/>
            <Route exact path='/f2' component={FormatTwo}/>
            <Route exact path='/f3' component={FormatThree}/>
            <Route exact path='/t' component={Timetable}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;