import React, { Component } from 'react';
import { connect } from 'react-redux';

// import F2Note from './F2Note';

import { getNotes } from '../../actions/formatTwo';

class F2MainContentArea extends Component {
  render() {
    const containerStyle = {
      ...this.props.style,
      padding: '20px',
      minHeight: '100vh'
    };

    // const notes = tempData.map((note, i) => {
    //   return (
    //     <F2Note
    //       key={i}
    //       data={note}
    //     />
    //   );
    // });

    return (
      <div style={containerStyle}>
        <div className="card-columns">
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