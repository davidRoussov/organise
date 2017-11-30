import React, { Component } from 'react';

class FormatOneNote extends Component {
  componentDidMount() {
    if(this.props.requestFocus) {
      this.input.focus();
    }
  }

  render() {
    const style = {
      position: 'absolute',
      left: this.props.note.x - 8,
      top: this.props.note.y - 12,
      
      width: '200px',
      height: '100px'
    };

    return (
      <div style={style}>
        <textarea
          ref={(input) => { this.input = input; }}  
        >
        </textarea>
      </div>
    );
  }
}

export default FormatOneNote;