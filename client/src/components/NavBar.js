import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import TimetableNavbarOptions from './Timetable/TimetableNavbarOptions';
import { logout } from '../actions/authentication';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      userMenuOpen: false
    };
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    const style = {
      navbar: {
        position: 'absolute',
        width: '100%'
      }
    };
    
    const path = window.location.pathname;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-primary" style={style.navbar}>
          <a className="navbar-brand" href="/">Organise</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className={ (path === '/f1' || path === '/') ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="/f1">Short</a>
              </li>
              <li className={ path === '/f2' ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="/f2">Medium</a>
              </li>
              <li className={ path === '/f3' ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="/f3">Long</a>
              </li>
              <li className={ path === '/t' ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="/t">Timetable</a>
              </li>
              { path === '/t' ?
                <TimetableNavbarOptions/>
                : null
              }
            </ul>
          </div>

          <ul className='navbar-nav mr-auto'>
            <li className="nav-item">
              <a id="userMenu" className="nav-link" onClick={() => this.setState({ userMenuOpen: !this.state.userMenuOpen })}>{this.props.user ? this.props.user.emailAddress : '[no user]'}</a>
              <Popover placement="bottom" isOpen={this.state.userMenuOpen} target="userMenu" toggle={() => this.setState({ userMenuOpen: !this.state.userMenuOpen })}>
                <PopoverHeader>{this.props.user ? this.props.user.emailAddress : '[no user]'}</PopoverHeader>
                <PopoverBody style={{paddingLeft: '10px', paddingRight: '10px', textAlign: 'center'}}>
                  <button type="button" className="btn btn-primary" style={{width: '100%'}} onClick={this.handleLogout.bind(this)}>Logout</button>
                </PopoverBody>
              </Popover>
            </li>
          </ul>

        </nav>
      </div>
    );
  }
};

const mapStateToProps = state => state.navbar;

const mapDispatchToProps ={
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);