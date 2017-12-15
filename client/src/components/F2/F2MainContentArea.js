import React, { Component } from 'react';
import { connect } from 'react-redux';

import F2Note from './F2Note';
import Spinner from '../Spinner';

import { getNotes } from '../../actions/formatTwo';

class F2MainContentArea extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const containerStyle = {
      ...this.props.style,
      padding: '20px',
      minHeight: '100vh',
      textAlign: 'center'
    };
    
    const notesInCurrentCategory = (this.props.notes && this.props.currentCategory) ? 
      this.props.notes.filter(note => note.categoryID === this.props.currentCategory) : [];

    const renderedNotes = notesInCurrentCategory && notesInCurrentCategory.map((note, i) =>
      <F2Note
        key={i}
        data={note}
      />
    );

    return (
      <div style={containerStyle}>
        { this.props.mainContentSpinnerVisible ? <Spinner size='48px'/> :
          <div className="card-columns">
            {renderedNotes}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => state.formatTwo;

const mapDispatchToProps = {
  getNotes
};

export default connect(mapStateToProps, mapDispatchToProps)(F2MainContentArea);