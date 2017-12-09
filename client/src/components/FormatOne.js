import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormatOneNote from './FormatOneNote';

import { createNewTextarea, getAllNotes } from '../actions/formatOne';

class FormatOne extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    this.props.getAllNotes();
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick(e) {
    if(
      !this.props.writeAreaDisabled &&
      this.node.contains(e.target) && 
      e.button === 0) {
      const x = e.x;
      const y = e.y;
      this.props.createNewTextarea(x, y);
    }
  }

  render() {
    const writeAreaStyle = {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      padding: '20px',
      borderRadius: '8px',
      cursor: 'text'
    };
    const writeAreaDisabled = {
      ...writeAreaStyle,
      backgroundColor: '#DCDCDC',
      cursor: 'not-allowed'
    };

    const style = {
      container: {
        width: '100%',
        height: '100%',
        padding: '20px'
      },
      writeArea: { ...writeAreaStyle },
      writeAreaDisabled: { ...writeAreaDisabled }
    };

    const elements = this.props.notes.map((note, i) =>  <FormatOneNote key={i} note={note} requestFocus={note.isNew}/>);

    return (
      <div style={style.container}>
        { this.props.writeAreaDisabled ?
          <div style={style.writeAreaDisabled}></div>
          :
          <div style={style.writeArea} ref={node => this.node = node}>
            {elements}
          </div>
        }
      </div>
    );
  }
};

const mapStateToProps = state => {
   return state.formatOne;
}

const mapDispatchToProps = {
  createNewTextarea,
  getAllNotes
};

export default connect(mapStateToProps, mapDispatchToProps)(FormatOne);