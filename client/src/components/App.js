import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import FormatOne from './FormatOne';
import FormatTwo from './FormatTwo';
import FormatThree from './FormatThree';
import Timetable from './Timetable';
import LoadingApp from './LoadingApp';

import { getUser } from '../actions/app';
class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
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
          { this.props.spinnerVisible ? <LoadingApp/> :
            <div>
              <NavBar user={this.props.user}/>
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
          }
        </div>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = state => state.app;

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);