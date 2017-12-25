import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { connect } from 'react-redux';
import Radium from 'radium';

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
        marginBottom: '10px',
        marginTop: '10px',
        marginLeft: '10px'
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


        {/* <div className="dropdown">
          <i key={i} style={style.noteOptions} className="fa fa-ellipsis-h dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
          <div className="dropdown-menu">
            <a className="dropdown-item">Edit</a>
            <a className="dropdown-item">Delete</a>
          </div>
        </div> */}

        <div style={style.noteOptions} key={i}>
            <button 
              type="button" 
              className="btn btn-default dropdown-toggle" 
              data-toggle="dropdown"
              style={style.noteOptionsButton}
              >
            </button>
            <ul className="dropdown-menu" role="menu" >
              <a className="dropdown-item">Edit</a>
              <a className="dropdown-item">Delete</a>
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
        </div>
        <div className="card-body">
          {list}


          <i 
            style={style.addTaskButton} 
            className="fa fa-plus"
            onClick={this.handleClickAddTask.bind(this)}
          >
          </i>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveNote
};

export default connect(null, mapDispatchToProps)(Radium(F2Note));