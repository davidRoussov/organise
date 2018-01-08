import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { connect } from 'react-redux';

import { saveNote, deleteNote } from '../../actions/formatTwo';

class F2Note extends Component {
  constructor(props) {
    super(props);

    const init = (key, alt='') => ((props.note && props.note[key]) ? props.note[key] : alt);

    this.state = {
      initialNoteHeading: init('heading'),
      noteHeading: init('heading'),
      intitialNoteItems: init('items', []),
      noteItems: init('items', []),
      addTaskButtonHover: false
    };
  }

  handleBlurNoteHeading() {
    // this.props.saveNote({
    //   ...this.props.note,
    //   heading: this.state.noteHeading
    // });
  }

  handleBlurNoteTask() {
    const newNote = {
      ...this.props.note,
      items: this.state.noteItems
    };
    this.props.saveNote(newNote);
  }

  handleClickAddTask() {
    const newNote = { ...this.props.note, 
      items: this.props.note.items.concat("")
    };
    this.props.saveNote(newNote);
  }

  handleDeleteTask = itemIndex => () => {
    const newItems = this.state.noteItems.filter((item, i) => i !== itemIndex);
    const newNote = { ...this.props.note, items: newItems };
    this.props.saveNote(newNote);
  }

  handleDeleteNote() {
    this.props.deleteNote(this.props.note.id);
  }

  toggleHoverAddTaskButton = () => this.setState({ addTaskButtonHover: !this.state.addTaskButtonHover })

  checkDifference() {
    this.props.note.items.forEach((item, i) => {
      const textarea = this[`noteTask${i}`];
      if(item !== textarea.currentValue) {
        textarea.textarea.style.color = '#d9534f';
      } else {
        textarea.textarea.style.color = '#495057';
      }
    });

    console.log(this.props.note.heading);
    console.log(this.noteHeading.currentValue);
    if(this.props.note.heading !== this.noteHeading.currentValue) {
      this.noteHeading.textarea.style.color = '#d9534f';
    } else {
      this.noteHeading.textarea.style.color = '#495057';
    }
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
        boxShadow: 'none',
        fontWeight: 'bold'
      },
      addTaskButton: {
        cursor: 'pointer',
        float: 'left',
        marginBottom: '10px',
        marginTop: '10px',
        marginLeft: '10px',
        color: this.state.addTaskButtonHover ? '#0275d8' : 'black',
        transform: this.state.addTaskButtonHover ? 'scale(1.1)' : ''
      },
      noteTask: {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        overflow: 'hidden',
        resize: 'none',
        boxShadow: 'none',
        borderBottom: '1px solid #DFD7CA',
        borderRadius: '0px',
        width: '100%',
        paddingRight: '24px'
      },
      noteOptions: {
        position: 'absolute',
        top: '0px',
        right: '0px'
      },
      noteOptionsHeading: {
        position: 'absolute',
        top: '5px',
        right: '0px'
      },
      noteOptionsButton: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }
    };

    const list = this.props.note && this.props.note.items.map((item, i) => 
      <div key={i} style={{ position: 'relative' }}>
        <TextareaAutosize
          className="form-control f2task"
          defaultValue={item}
          ref={(textarea) => { this[`noteTask${i}`] = textarea; } }
          style={style.noteTask}
          placeholder='Enter task'
          onChange={this.checkDifference.bind(this)}
          onBlur={this.handleBlurNoteTask.bind(this)}
        ></TextareaAutosize>

        <div style={style.noteOptions} key={i}>
            <button 
              type="button" 
              className="btn btn-default dropdown-toggle" 
              data-toggle="dropdown"
              style={style.noteOptionsButton}
              >
            </button>
            <ul className="dropdown-menu" role="menu" style={{position: 'relative', zIndex: '1000'}}>
              <a className="dropdown-item" onClick={this.handleDeleteTask(i).bind(this)}>Delete</a>
            </ul>
        </div>        
      </div>
    );

    return (
      <div className="card bg-light mb-3">
        <div className="card-header">
          <TextareaAutosize
            className="form-control"
            defaultValue={this.props.note.heading}
            ref={(textarea) => { this.noteHeading = textarea } }
            style={style.noteHeading}
            placeholder='Enter heading'
            onChange={this.checkDifference.bind(this)}
            onBlur={this.handleBlurNoteHeading.bind(this)}
          ></TextareaAutosize>   
          <div style={style.noteOptionsHeading} className="btn-group" role="group">
            <button 
              type="button" 
              className="btn btn-default dropdown-toggle" 
              data-toggle="dropdown"
              style={style.noteOptionsButton}
              >
            </button>
            <ul className="dropdown-menu" role="menu" style={{position: 'relative', zIndex: '1000'}}>
              <a className="dropdown-item" onClick={this.handleDeleteNote.bind(this)}>Delete</a>
            </ul>
          </div>    
        </div>
        <div className="card-body">
          {list}
          <i 
            style={style.addTaskButton} 
            className="fa fa-plus"
            onClick={this.handleClickAddTask.bind(this)}
            onMouseEnter={this.toggleHoverAddTaskButton.bind(this)}
            onMouseLeave={this.toggleHoverAddTaskButton.bind(this)}
          >
          </i>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveNote,
  deleteNote
};

export default connect(null, mapDispatchToProps)(F2Note);