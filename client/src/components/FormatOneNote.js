import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';

import { removeNewNote, saveNote } from '../actions/formatOne';

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
    } else if (this.state.initialText !== this.state.text) {
      const saveNoteData = { ...this.props.note, text: this.state.text };
      this.props.saveNote(saveNoteData);
    }
  }

  handleChangeTextarea = e => this.setState({ text: e.target.value });

  render() {
    const style = {
      note: {
        position: 'absolute',
        left: this.props.note.x - 8,
        top: this.props.note.y - 12,
        
        width: '200px',
        height: '100px'
      },
      textarea: {
        border: 'none',
        overflow: 'auto',
        outline: 'none',
        boxShadow: 'none',
        resize: 'none',
      }
    };

    return (
      <div style={style.note}>
        <TextareaAutosize
          className="form-control"
          innerRef={(input) => { this.input = input; }}
          onBlur={this.handleBlur.bind(this)}
          value={this.state.text}
          onChange={this.handleChangeTextarea.bind(this)}
          style={style.textarea}
        >
        </TextareaAutosize>
      </div>
    );
  }
}

const mapStateToProps = state => state.formatOne;

const mapDispatchToProps = {
  removeNewNote,
  saveNote
}

export default connect(mapStateToProps, mapDispatchToProps)(FormatOneNote);