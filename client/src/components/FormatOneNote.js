import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeNewNote } from '../actions/formatOne';

class FormatOneNote extends Component {
  constructor() {
    super();
    this.state = {
      initialText: '',
      text: ''
    }
  }

  componentDidMount() {

    if(this.props.note.text) {
      this.setState({
        initialText: this.props.note.text,
        text: this.props.note.text
      });
    }

    if(this.props.requestFocus) {
      this.input.focus();
    }
  }

  handleBlur(e) {
    if(this.props.note.isNew && this.state.initialText === this.state.text) {
      this.props.removeNewNote();
    }
  }

  handleChangeTextarea = e => this.setState({ text: e.target.value });

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
          className="form-control"
          ref={(input) => { this.input = input; }}
          onBlur={this.handleBlur.bind(this)}
          value={this.state.text}
          onChange={this.handleChangeTextarea.bind(this)}
        >
        </textarea>
      </div>
    );
  }
}

const mapStateToProps = state => state.formatOne;

const mapDispatchToProps = {
  removeNewNote
}

export default connect(mapStateToProps, mapDispatchToProps)(FormatOneNote);