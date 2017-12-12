import React, { Component } from 'react';

import F2Note from './F2Note';


const tempData = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];

class F2MainContentArea extends Component {
  render() {
    const containerStyle = {
      ...this.props.style,
      padding: '20px'
    };

    const notes = tempData.map((note, i) => {
      return (
        <F2Note
          key={i}
          data={note}
        />
      );
    });

    return (
      <div style={containerStyle}>
        <div className="card-columns">
          { notes }
        </div>
        
      </div>
    );
  }
}

export default F2MainContentArea;