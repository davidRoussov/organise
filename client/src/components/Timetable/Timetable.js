import React, { Component } from 'react';
import { connect } from 'react-redux';

import SettingsModal from './SettingsModal';

import { closeTimetableModal, getTableData } from '../../actions/timetable';

class Timetable extends Component {
  componentDidMount() {
    this.props.getTableData();
  }

  render() {
    const style = {
      container: {
        width: '100%',
        height: '100%',
      },
      table: {
        tableLayout: 'fixed',
        border: '1px solid green'
      },
      timeCol: {
        width: '9%'
      },
      dayCol: {
        width: '13%'
      }
    };

    const visibleTimes = 
      (this.props.timetableData && this.props.timetableData.visibleTimes && Object.keys(this.props.timetableData.visibleTimes)
        .filter(time => this.props.timetableData.visibleTimes[time])) || []

    const tbody = visibleTimes.sort().map((time, i) =>
      <tr key={i}>
        <td>{time}</td>
        <td contentEditable="true"></td>
        <td contentEditable="true"></td>
        <td contentEditable="true"></td>
        <td contentEditable="true"></td>
        <td contentEditable="true"></td>
        <td contentEditable="true"></td>
        <td contentEditable="true"></td>
      </tr>
    );

    return (
      <div style={style.container}>
        <table className="table table-bordered" style={style.table}>
          <thead>
            <tr>
              <th scope="col" style={style.timeCol}></th>
              <th scope="col" style={style.dayCol}>Monday</th>
              <th scope="col" style={style.dayCol}>Tuesday</th>
              <th scope="col" style={style.dayCol}>Wednesday</th>
              <th scope="col" style={style.dayCol}>Thursday</th>
              <th scope="col" style={style.dayCol}>Friday</th>
              <th scope="col" style={style.dayCol}>Saturday</th>
              <th scope="col" style={style.dayCol}>Sunday</th>
            </tr>
          </thead>
          <tbody>
            { tbody }
          </tbody>
        </table> 


        <SettingsModal
          show={this.props.timetableSettingsModalVisible}
          close={() => this.props.closeTimetableModal()}
        />
      </div>
    );
  }
};

const mapStateToProps = state => state.timetable;

const mapDisaptchToProps = {
  closeTimetableModal,
  getTableData
};

export default connect(mapStateToProps, mapDisaptchToProps)(Timetable);