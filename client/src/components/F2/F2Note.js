import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { connect } from 'react-redux';

import { saveNote, deleteNote, setNote } from '../../actions/formatTwo';

class F2Note extends Component {
  constructor() {
    super();
    this.state = {
      addTaskButtonHover: false
    };
  }

  handleBlurNoteHeading() {  }

  handleBlurNoteTask() {  }

  handleChangeHeading = e => {
    const newHeading = e.target.value;
    const newNote = { ...this.props.note, heading: newHeading };
    
    this.props.setNote(newNote);
  }

  handleChangeItem = itemIndex => e => {
    const newItem = e.target.value;

    const newItems = this.props.note.items.map((item, i) => {
      if (i === itemIndex) {
        return newItem;
      } else {
        return item;
      }
    });
    const newNote = { ...this.props.note, items: newItems };
    
    this.props.setNote(newNote);
  }

  handleClickAddTask() {
    const newNote = { ...this.props.note, 
      items: this.props.note.items.concat("")
    };
    this.props.saveNote(newNote);
  }

  handleDeleteTask = itemIndex => () => {
    const newItems = this.props.note.items.filter((item, i) => i !== itemIndex);
    const newNote = { ...this.props.note, items: newItems };
    this.props.saveNote(newNote);
  }

  handleDeleteNote() {
    this.props.deleteNote(this.props.note.id);
  }

  toggleHoverAddTaskButton = () => this.setState({ addTaskButtonHover: !this.state.addTaskButtonHover })

  render() {

    console.log(JSON.stringify(this.props, null, 2));

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

    const list = this.props.note.items.map((item, i) => 
      <div key={i} style={{ position: 'relative' }}>
        <TextareaAutosize
          className="form-control f2task"
          style={style.noteTask}
          placeholder='Enter task'
          value={item}
          onChange={this.handleChangeItem(i).bind(this)}
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
            style={style.noteHeading}
            placeholder='Enter heading'
            value={this.props.note.heading}
            onChange={this.handleChangeHeading.bind(this)}
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
  deleteNote,
  setNote
};

export default connect(null, mapDispatchToProps)(F2Note);