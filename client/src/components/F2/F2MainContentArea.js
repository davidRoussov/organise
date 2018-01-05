import React, { Component } from 'react';
import { connect } from 'react-redux';

import F2Note from './F2Note';

import { getNotes } from '../../actions/formatTwo';

class F2MainContentArea extends Component {
  constructor() {
    super();
    this.state = {
      filteredNotes: []
    };
  }

  componentDidMount() {
    this.props.getNotes();
  }

  componentWillReceiveProps(props) {
    if(props.notes) {
      const notesInCategory = props.notes.filter(note => note.categoryID === props.currentCategory);
      this.setState({ filteredNotes: [] }, () => {
        this.setState({ filteredNotes: notesInCategory }); 
      });
    }
  }

  render() {
    const containerStyle = {
      ...this.props.style,
      padding: '20px',
      minHeight: '100vh',
      textAlign: 'center'
    };

    const renderedNotes = this.state.filteredNotes.map((note, i) =>
      <F2Note
        key={i}
        note={note}
      />
    );

    return (
      <div style={containerStyle}>
        <div className="card-columns">
          {renderedNotes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.formatTwo;

const mapDispatchToProps = {
  getNotes
};

export default connect(mapStateToProps, mapDispatchToProps)(F2MainContentArea);