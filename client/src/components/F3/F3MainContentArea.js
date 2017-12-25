import React, { Component } from 'react';
import { connect } from 'react-redux';

class F3MainContentArea extends Component {
  render() {
    return (
      <p>maincontent area</p>
    );
  }
}

const mapStateToProps = state => state.formatThree;

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(F3MainContentArea);