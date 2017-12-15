import React, { Component } from 'react';

class F2Note extends Component {
  render() {

    const list = this.props.data.items && this.props.data.items.map(item => 
      <p>item</p>
    );


    return (
      <div className="card bg-light mb-3" style={{maxWidth: "20rem"}}>
        <div className="card-header">{ this.props.data.heading }</div>
        <div className="card-body">
          {list}
        </div>
      </div>
    );
  }
}

export default F2Note;