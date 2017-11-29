import React, { Component } from 'react';

class FormatOneNote extends Component {
  render() {
    console.log(this.props.note);
    const style = {
      position: 'absolute',
      left: this.props.note.x,
      top: this.props.note.y,
      
      width: '200px',
      height: '100px'
    };

    return (
      <div style={style}>
        <textarea></textarea>
      </div>
    );
  }
}

export default FormatOneNote;