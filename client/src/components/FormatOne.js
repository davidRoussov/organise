import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormatOneNote from './FormatOneNote';

import { createNewTextarea } from '../actions/formatOne';

class FormatOne extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick(e) {
    if(this.node.contains(e.target) && !this.props.disableCreateNew) {
      const x = e.x;
      const y = e.y;
      this.props.createNewTextarea(x, y);
    }
  }

  render() {
    const style = {
      container: {
        width: '100%',
        height: '100%',
        padding: '20px'
      },
      writeArea: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        padding: '20px',
        borderRadius: '8px',
        cursor: 'text'
      }
    };

    const elements = this.props.notes.map((note, i) =>  <FormatOneNote key={i} note={note} requestFocus={note.isNew}/>);

    return (
      <div style={style.container}>
        <div style={style.writeArea} ref={node => this.node = node}>
          {elements}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
   return state.formatOne;
}

const mapDispatchToProps = {
  createNewTextarea
};

export default connect(mapStateToProps, mapDispatchToProps)(FormatOne);