import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../actions/authentication';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userInputsEmailAddress: '',
      userInputsPassword: ''
    }
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.login({
      username: this.state.userInputsEmailAddress,
      password: this.state.userInputsPassword
    });
  }

  handleUserInputsEmailAddress = e => this.setState({ userInputsEmailAddress: e.target.value })
  handleUserInputsPassword = e => this.setState({ userInputsPassword: e.target.value })

  render() {
    const style = {
      container: {
        background: '#67809F',//'linear-gradient(#2c3e50, #0C2032)',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        display: 'table'
      },
      middle: {
        display: 'table-cell',
        verticalAlign: 'middle'
      },
      form: {
        backgroundColor: '#F8F8F8',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '8px',
        width: '30%',
        // padding: '40px',
        boxShadow: '0 0 10px #000'
      },
      panelBody: {
        padding: '40px'
      },
      panelFooter: {
        borderRadius: '0px 0px 8px 8px',
        padding: '20px'
      },  
      formHeading: {
        margin: '0px',
        marginBottom: '20px'
      },
      inputEmailAddress: {
        marginBottom: '20px'
      },
      inputPassword: {
        marginBottom: '20px'
      },
      loginButton: {
        width: '100%'
      },
      spinner: {
        fontSize: '28px'
      }
    };

    return (
      <div style={style.container}>
        <div style={style.middle}>
          <div style={style.form} className='panel panel-default'>
            <div style={style.panelBody} className='panel-body'>
              <h3 style={style.formHeading}>Log in to your account</h3>

              {this.props.spinnerVisible ? <i className="fa fa-spinner fa-spin" aria-hidden="true" style={style.spinner}></i> :

                <form onSubmit={this.handleLogin.bind(this)}>
                  <FormGroup>
                    <FormControl
                      type='email'
                      placeholder='Email address'
                      style={style.inputEmailAddress}
                      value={this.state.userInputsEmailAddress}
                      onChange={this.handleUserInputsEmailAddress.bind(this)}>
                    </FormControl>
                    <FormControl
                      type='password'
                      placeholder='Password'
                      style={style.inputPassword}
                      value={this.state.userInputsPassword}
                      onChange={this.handleUserInputsPassword}>
                    </FormControl>
                    <Button
                      type='submit'
                      className='btn-primary'
                      style={style.loginButton}>
                    Log In</Button>
                  </FormGroup>
                </form>

              }
            </div>

            <div style={style.panelFooter} className='panel-footer'>
              <span>No account?  </span>
              <a href='/signup'>  Sign up</a>              
            </div>
          </div>
          <a style={{color: 'white'}}>Forgot your password?</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state.authentication;

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);