import React, { Component } from 'react';
import { connect } from 'react-redux';

import SettingsModal from './SettingsModal';

class Timetable extends Component {
  render() {
    const style = {
      container: {
        width: '100%',
        height: '100%'
      },
      table: {
        display: 'table'
      }
    };

    console.log(this.props);

    return (
      <div style={style.container}>
        <table className="table table-hover" style={style.table}>
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-active">
              <th scope="row">Active</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Default</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Primary</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">Secondary</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-success">
              <th scope="row">Success</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-danger">
              <th scope="row">Danger</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-warning">
              <th scope="row">Warning</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-info">
              <th scope="row">Info</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-light">
              <th scope="row">Light</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-dark">
              <th scope="row">Dark</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table> 


        <SettingsModal
          show={this.props.timetableSettingsModalVisible}
        />
      </div>
    );
  }
};

const mapStateToProps = state => state.timetable;

const mapDisaptchToProps = {

};

export default connect(mapStateToProps, mapDisaptchToProps)(Timetable);