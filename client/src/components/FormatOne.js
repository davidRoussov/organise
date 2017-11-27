import React, { Component } from 'react';

class FormatOne extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick(e) {
    if(this.node.contains(e.target)) {
      console.log('click inside');
      console.log(e);
    }
  }

  render() {
    const style = {
      container: {
        width: '100%',
        height: '100%',
        padding: '20px'
      },
      writeArea: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        padding: '20px',
        borderRadius: '8px'
      }
    };

    return (
      <div style={style.container}>
        <div style={style.writeArea} ref={node => this.node = node}>
          <p>hello</p>
        </div>
      </div>
    );
  }
};

export default FormatOne;