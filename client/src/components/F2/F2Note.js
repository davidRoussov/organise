import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { connect } from 'react-redux';
import Radium from 'radium';

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

  handleChangeNoteItem = itemIndex => e => {
    const newItems = this.state.noteItems.map((item, i) => {
      if(i !== itemIndex) return item;
      
      return e.target.value;
    });

    this.setState({ noteItems: newItems });
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

    const list = this.state.noteItems.map((item, i) => 
      <div key={i} style={{ position: 'relative' }}>
        <TextareaAutosize
          className="form-control"
          value={item}
          onChange={this.handleChangeNoteItem(i).bind(this)}
          style={style.noteTask}
          placeholder='Enter task'
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

export default connect(null, mapDispatchToProps)(Radium(F2Note));