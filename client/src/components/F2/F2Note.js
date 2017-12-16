import React, { Component } from 'react';

class F2Note extends Component {
  constructor() {
    super();

    this.state = {
      noteHeading: ''
    };
  }

  componentWillReceiveProps(props) {
    if(props.heading) {
      this.setState({ noteHeading: props.heading });
    }
  }

  handleChangeNoteHeading = e => this.setState({ noteHeading: e.target.value });

  render() {

    const list = this.props.data.items && this.props.data.items.map(item => 
      <p>item</p>
    );


    return (
      <div className="card bg-light mb-3" style={{maxWidth: "20rem"}}>
        <div className="card-header">
          <input
            type="text"
            className="form-control"
            value={this.state.noteHeading}
            onChange={this.handleChangeNoteHeading.bind(this)}
          />   
        </div>
        <div className="card-body">
          {list}
        </div>
      </div>
    );
  }
}

export default F2Note;