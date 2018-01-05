import React, { Component } from 'react';
import { connect } from 'react-redux';

import F3Note from './F3Note';

class F3MainContentArea extends Component {
  render() {
    const containerStyle = {
      ...this.props.style,
      padding: '20px',
      minHeight: '100vh'
    };

    return (
      <div style={containerStyle}>
        { this.props.currentCategory ? <F3Note/> : null }
      </div>
    );
  }
}

const mapStateToProps = state => state.formatThree;

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(F3MainContentArea);