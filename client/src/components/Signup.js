import React, { Component } from 'react';
import { FormControl, FormGroup, Button, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { signup } from '../actions/authentication';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      userInputsFirstName: '',
      userInputsLastName: '',
      userInputsEmailAddress: '',
      userInputsPassword1: '',
      userInputsPassword2: ''
    };
  }

  submitSignup(e) {
    e.preventDefault();
    if(this.state.userInputsPassword1 === this.state.userInputsPassword2) {
      this.props.signup({ 
        firstName: this.state.userInputsFirstName,
        lastName: this.state.userInputsLastName,
        emailAddress: this.state.userInputsEmailAddress,  
        password: this.state.userInputsPassword1 
      });
    } else {
      console.log('passwords don\'t match');
    }
  }

  handleChangeUserInputsFirstName = e => this.setState({ userInputsFirstName: e.target.value });
  handleChangeUserInputsLastName = e => this.setState({ userInputsLastName: e.target.value });
  handleChangeUserInputsEmailAddress = e => this.setState({ userInputsEmailAddress: e.target.value });
  handleChangeUserInputsPassword1 = e => this.setState({ userInputsPassword1: e.target.value });
  handleChangeUserInputsPassword2 = e => this.setState({ userInputsPassword2: e.target.value });

  render() {
    const style = {
      top: {
        height: '100%',
        width: '100%',
      },
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
        boxShadow: '0 0 10px #000'
      },
      panelBody: {
        padding: '40px'
      },
      label: {
        float: 'left'
      },
      inputField: {
        marginBottom: '20px'
      },
      loginButton: {
        width: '100%'
      },
      spinner: {
        fontSize: '32px'
      }
    };

    return (
      <div style={style.top}>
        <div style={style.container}>
          <div style={style.middle}>
            <div style={style.form} className='panel panel-default'>
              <div style={style.panelBody} className='panel-body'>

                { this.props.spinnerVisible ? <i className="fa fa-spinner fa-spin" aria-hidden="true" style={style.spinner}></i> :
                  <form onSubmit={this.submitSignup.bind(this)}>
                    <FormGroup>
                      <ControlLabel style={style.label}>First name</ControlLabel>
                      <FormControl
                        type='text'
                        placeholder='First name'
                        style={style.inputField}
                        value={this.state.userInputsFirstName}
                        onChange={this.handleChangeUserInputsFirstName.bind(this)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel style={style.label}>Last name</ControlLabel>
                      <FormControl
                        type='text'
                        placeholder='Last name'
                        style={style.inputField}
                        value={this.state.userInputsLastName}
                        onChange={this.handleChangeUserInputsLastName.bind(this)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel style={style.label}>Email address</ControlLabel>
                      <FormControl
                        type='email'
                        placeholder='Email address'
                        style={style.inputField}
                        value={this.state.userInputsEmailAddress}
                        onChange={this.handleChangeUserInputsEmailAddress.bind(this)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel style={style.label}>Password</ControlLabel>
                      <FormControl
                        type='password'
                        placeholder='Password'
                        style={style.inputField}
                        value={this.state.userInputsPassword1}
                        onChange={this.handleChangeUserInputsPassword1.bind(this)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel style={style.label}>Re-type password</ControlLabel>
                      <FormControl
                        type='password'
                        placeholder='Re-type password'
                        style={style.inputField}
                        value={this.state.userInputsPassword2}
                        onChange={this.handleChangeUserInputsPassword2.bind(this)}
                      />
                    </FormGroup>
                    <Button
                      type='submit'
                      className='btn-primary'
                      style={style.loginButton}>
                    CREATE ACCOUNT</Button>
                  </form>
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state.authentication;

const mapDispatchToProps = {
  signup
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);