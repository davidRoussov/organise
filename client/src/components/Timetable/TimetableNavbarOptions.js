import React, { Component } from 'react';
import { connect } from 'react-redux';

import { triggerTimetableModal } from '../../actions/timetable';

class TimetableNavbarOptions extends Component {
  constructor() {
    super();
    this.state = {
      visible: false, 
      colorButton: {
        fontSize: '16px',
        padding: '3px',
        position: 'absolute',
        top: '50%',
        left: '20px',
        margin: '-11px 0 0 -11px',
        cursor: 'pointer',
        WebkitTransition: "0.5s",
        MozTransition: '0.5s',
        OTransition: '0.5s',
        transition: '0.5s',

        transform: 'scale(0.5)',

        opacity: '0',
        visible: 'hidden'
      }
    }
  }

  componentWillReceiveProps(props) {
    if(!props.colorButtonsVisible) {
      this.setState({
        colorButton: {
          ...this.state.colorButton,
          opacity: '0',
          visibility: 'hidden',
          transform: 'scale(0.5)'
        }
      });
    } else if (props.colorButtonsVisible) {
      this.setState({
        colorButton: {
          ...this.state.colorButton,
          opacity: '1',
          visibility: 'visible',
          transform: 'scale(1)'
        }
      })
    }
  }

  render() {
    const colorOne = {
      ...this.state.colorButton,
      color: '#c0392b'
    };

    const colorTwo = {
      ...this.state.colorButton,
      color: '#2980b9',
      left: '40px'
    };

    const colorThree = {
      ...this.state.colorButton,
      color: '#8e44ad',
      left: '60px'
    };

    const colorFour = {
      ...this.state.colorButton,
      color: '#27ae60',
      left: '80px'
    };

    const colorFive = {
      ...this.state.colorButton,
      color: '#d35400',
      left: '100px'
    };

    return [
        <li className="nav-item" key={1}>
          <button 
            className="btn btn-info btn-sm" 
            style={{marginTop: '3px'}}
            onClick={this.props.triggerTimetableModal}
          >Settings</button>
        </li>,
        <li className="nav-item" style={{position: 'relative'}} key={2}>

          <i className="fa fa-circle" aria-hidden="true" style={colorOne}></i>

          <i className="fa fa-circle" aria-hidden="true" style={colorTwo}></i>

          <i className="fa fa-circle" aria-hidden="true" style={colorThree}></i>

          <i className="fa fa-circle" aria-hidden="true" style={colorFour}></i>

          <i className="fa fa-circle" aria-hidden="true" style={colorFive}></i>

        </li>
    ]
  }
}

const mapStateToProps = state => state.timetable;

const mapDispatchToProps = {
  triggerTimetableModal
};

export default connect(mapStateToProps, mapDispatchToProps)(TimetableNavbarOptions);