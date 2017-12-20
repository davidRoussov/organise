import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { connect } from 'react-redux';

import { saveNote } from '../../actions/formatTwo';

class F2Note extends Component {
  constructor(props) {
    super(props);

    const init = (key, alt='') => ((props.note && props.note[key]) ? props.note[key] : alt);

    this.state = {
      initialNoteHeading: init('heading'),
      noteHeading: init('heading'),
      intitialNoteItems: init('items', []),
      noteItems: init('items', [])
    };
  }

  handleChangeNoteHeading = e => { 
    this.setState({ noteHeading: e.target.value });
  }

  handleBlurNoteHeading() {
    if(this.state.initialNoteHeading !== this.state.noteHeading) {
      this.props.saveNote({
        ...this.props.note,
        heading: this.state.noteHeading
      });
    }
  }

  handleClickAddTask() {
    const newNote = { ...this.props.note, 
      items: this.props.note.items.concat("")
    };
    this.props.saveNote(newNote);
  }

  render() {
    const style = {
      noteHeading: {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        overflow: 'hidden',
        resize: 'none',
        padding: '0px',
        boxShadow: 'none'
      },
      addTaskButton: {
        cursor: 'pointer',
        float: 'left',
        marginBottom: '10px'
      }
    };

    const list = this.props.note && this.props.note.items && this.props.note.items.map(item => 
      <p>item</p>
    );

    return (
      <div className="card bg-light mb-3" style={{maxWidth: "20rem"}}>
        <div className="card-header">
          <TextareaAutosize
            className="form-control"
            value={this.state.noteHeading}
            onChange={this.handleChangeNoteHeading.bind(this)}
            style={style.noteHeading}
            placeholder='Enter heading'
            onBlur={this.handleBlurNoteHeading.bind(this)}
          ></TextareaAutosize>   
        </div>
        <div className="card-body">
          {list}


          <i 
            style={style.addTaskButton} 
            className="fa fa-plus"
            onClick={this.handleClickAddTask.bind(this)}>
          </i>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveNote
};

export default connect(null, mapDispatchToProps)(F2Note);