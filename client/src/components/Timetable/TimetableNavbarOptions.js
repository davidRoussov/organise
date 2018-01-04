import React, { Component } from 'react';
import { connect } from 'react-redux';

import { triggerTimetableModal, updateCellColor } from '../../actions/timetable';

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

  handleClickColorButton(e) {
    var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]; 

    function rgb2hex(rgb) {
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    function hex(x) {
      return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }

    const currentlyFocusedCell = this.props.currentlyFocusedCell;
    let cellColor = null;
    if(e.target.style.color !== 'white') {
      cellColor = rgb2hex(e.target.style.color);
    }

    this.props.updateCellColor(currentlyFocusedCell, cellColor );
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

    const colorSeven = {
      ...this.state.colorButton,
      color: '#f1c40f',
      left: '120px'
    };

    const colorEight = {
      ...this.state.colorButton,
      color: '#1abc9c',
      left: '140px'
    };

    const colorNine = {
      ...this.state.colorButton,
      color: '#95a5a6',
      left: '160px'
    };

    const colorTen = {
      ...this.state.colorButton,
      color: '#F1A9A0',
      left: '180px'
    };

    const colorSix = {
      ...this.state.colorButton,
      color: 'white',
      left: '200px'
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

          <i 
            className="fa fa-circle timetableColorIcon" 
            aria-hidden="true" 
            style={colorOne}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

          <i 
            className="fa fa-circle timetableColorIcon" 
            aria-hidden="true" 
            style={colorTwo}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

          <i 
            className="fa fa-circle timetableColorIcon" 
            aria-hidden="true" 
            style={colorThree}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

          <i 
            className="fa fa-circle timetableColorIcon" 
            aria-hidden="true" 
            style={colorFour}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

          <i 
            className="fa fa-circle timetableColorIcon" 
            aria-hidden="true" 
            style={colorFive}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

          <i
            className="fa fa-circle-thin timetableColorIcon" 
            aria-hidden="true" 
            style={colorSix}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

          <i
            className="fa fa-circle timetableColorIcon" 
            aria-hidden="true" 
            style={colorTen}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

          <i
            className="fa fa-circle timetableColorIcon" 
            aria-hidden="true" 
            style={colorNine}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

          <i
            className="fa fa-circle timetableColorIcon" 
            aria-hidden="true" 
            style={colorEight}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

          <i
            className="fa fa-circle timetableColorIcon" 
            aria-hidden="true" 
            style={colorSeven}
            onClick={this.handleClickColorButton.bind(this)}
          ></i>

        </li>
    ]
  }
}

const mapStateToProps = state => state.timetable;

const mapDispatchToProps = {
  triggerTimetableModal,
  updateCellColor
};

export default connect(mapStateToProps, mapDispatchToProps)(TimetableNavbarOptions);