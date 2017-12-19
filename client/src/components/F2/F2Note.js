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
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveNote
};

export default connect(null, mapDispatchToProps)(F2Note);