import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AlertContainer from 'react-alert';

import NavBar from './NavBar';
import FormatOne from './FormatOne';
import FormatTwo from './F2/FormatTwo';
import FormatThree from './FormatThree';
import Timetable from './Timetable';
import LoadingApp from './LoadingApp';

import { getUser, hideAlerts } from '../actions/app';
class App extends Component {
  alertConfig = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'fade'
  }

  componentDidMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(props) {
    if(props.displayAlert) {
      this.msg.show(props.alertMessage, {
        type: props.alertType
      });
      this.props.hideAlerts();
    }
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
      <div style={style.app}>
        <BrowserRouter>
          <div style={style.app}>
            { this.props.spinnerVisible ? <LoadingApp/> :
              <div style={{ height: '100%' }}>
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
        <AlertContainer ref={a => this.msg = a} { ...this.alertConfig } />
      </div>
    );
  }
};

const mapStateToProps = state => state.app;

const mapDispatchToProps = {
  getUser,
  hideAlerts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);