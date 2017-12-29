import React, { Component } from 'react';
import { connect } from 'react-redux';

import SettingsModal from './SettingsModal';

import { closeTimetableModal } from '../../actions/timetable';

class Timetable extends Component {
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

    const hours = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00", "00:00"];
    const tbody = [];
    for (let i = 0; i < hours.length - 1; i++) {
      tbody.push(
        <tr key={i}>
          <td>{hours[i] + " - " + hours[i + 1]}</td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
          <td contenteditable="true"></td>
        </tr>
      );
    }

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
  closeTimetableModal
};

export default connect(mapStateToProps, mapDisaptchToProps)(Timetable);