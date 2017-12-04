import React, { Component } from 'react';

class NavBar extends Component {
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={style.navbar}>
          <a className="navbar-brand" href="/">Organise</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className={ (path === '/f1' || path === '/') ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="/f1">Format 1</a>
              </li>
              <li className={ path === '/f2' ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="/f2">Format 2</a>
              </li>
              <li className={ path === '/f3' ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="/f3">Format 3</a>
              </li>
              <li className={ path === '/f4' ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="/f4">Timetable</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;