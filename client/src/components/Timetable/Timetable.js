import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';

import SettingsModal from './SettingsModal';

import { closeTimetableModal, getTableData, updateTableCell, showColorButtons, hideColorButtons, setCurrentlyFocusedCell } from '../../actions/timetable';

class Timetable extends Component {
  constructor() {
    super();
    this.state = {
      "00:00 - 01:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "01:00 - 02:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "02:00 - 03:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "03:00 - 04:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "04:00 - 05:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "05:00 - 06:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "06:00 - 07:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "07:00 - 08:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "08:00 - 09:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "09:00 - 10:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "10:00 - 11:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "11:00 - 12:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "12:00 - 13:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "13:00 - 14:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "14:00 - 15:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "15:00 - 16:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "16:00 - 17:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "17:00 - 18:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "18:00 - 19:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "19:00 - 20:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "20:00 - 21:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "21:00 - 22:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "22:00 - 23:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      },
      "23:00 - 00:00": {
          "monday": '',
          "tuesday": '',
          "wednesday": '',
          "thursday": '',
          "friday": '',
          "saturday": '',
          "sunday": '' 
      }
    };
  }

  componentDidMount() {
    this.props.getTableData();
  }

  componentWillReceiveProps(props) {
    if(props.timetableData && props.timetableData.data) {
      this.setState({ ...props.timetableData.data });
    }

    if(props.redToBlack) {
      Object.keys(this.state).forEach(time => {
        ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].forEach(day => {
          if(this[time + day]) {
            this[time + day].textarea.style.color = 'black';
          }
        });
      });
    }
  }

  handleChange = (time, day) => e => {
    const val = e.target.value;
    if(val === '' && !this.state[time][day]) {

    }
    else if(val !== this.state[time][day]) {
      this.props.updateTableCell(time, day, val);
    }

    this.props.hideColorButtons();
  }

  formatTime(time) {
    if(this.props.timetableData.twelveHours) {
      return time
        .split(' - ')
        .map(t => {
          const split = t.split(':')
          const hour = Number(split[0])
          const suffix = (hour >= 12) ? 'pm' : 'am'
          return ((hour + 11) % 12 + 1) + ':' + split[1] + suffix;
        })
        .join(' - ')
    } else {
      return time;
    }
  }

  handleTableCellFocus = (time, day) => () => {
    this.props.setCurrentlyFocusedCell(time, day);
    this.props.showColorButtons();  
  }

  calculateCellStyle(time, day) {
    const timetableColors = this.props.timetableData.colors;
    const color = timetableColors && timetableColors[time] && timetableColors[time][day];

    return {
      width: '100%',
      minHeight: '46px',
      background: color || 'transparent',
      border: '0',
      borderRadius: '0px',
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '1px',
      color: 'black'  
    }
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
      },
      editableTD: {
        padding: '0px',
        position: 'relative'
      },
      timeCell: {
        fontSize: '11px'
      }
    };

    const visibleTimes = 
      (this.props.timetableData && this.props.timetableData.visibleTimes && Object.keys(this.props.timetableData.visibleTimes)
        .filter(time => this.props.timetableData.visibleTimes[time])) || []

    const tbody = visibleTimes.sort().map((time, i) => {
      const formattedTime = this.formatTime(time);
      return (
        <tr key={i}>
          <td style={style.timeCell}>{formattedTime}</td>
          <td style={style.editableTD}>
            <TextareaAutosize
              className="form-control"
              style={this.calculateCellStyle(time, 'monday')}
              defaultValue={this.state[time].monday}
              ref={input => this[time + 'monday'] = input}
              onChange={() => this[time + 'monday'].textarea.style.color = '#d9534f '}
              onFocus={this.handleTableCellFocus(time, 'monday').bind(this)}
              onBlur={this.handleChange(time, 'monday').bind(this)}
            ></TextareaAutosize>
          </td>
          <td style={style.editableTD}>
            <TextareaAutosize
              className="form-control"
              style={this.calculateCellStyle(time, 'tuesday')}
              defaultValue={this.state[time].tuesday}
              ref={input => this[time + 'tuesday'] = input}
              onChange={() => this[time + 'tuesday'].textarea.style.color = '#d9534f  '}
              onFocus={this.handleTableCellFocus(time, 'tuesday').bind(this)}
              onBlur={this.handleChange(time, 'tuesday').bind(this)}
            ></TextareaAutosize>
          </td>
          <td style={style.editableTD}>
            <TextareaAutosize
              className="form-control"
              style={this.calculateCellStyle(time, 'wednesday')}
              defaultValue={this.state[time].wednesday}
              ref={input => this[time + 'wednesday'] = input}
              onChange={() => this[time + 'wednesday'].textarea.style.color = '#d9534f  '}
              onFocus={this.handleTableCellFocus(time, 'wednesday').bind(this)}
              onBlur={this.handleChange(time, 'wednesday').bind(this)}
            ></TextareaAutosize>
          </td>
          <td style={style.editableTD}>
            <TextareaAutosize
              className="form-control"
              style={this.calculateCellStyle(time, 'thursday')}
              defaultValue={this.state[time].thursday}
              ref={input => this[time + 'thursday'] = input}
              onChange={() => this[time + 'thursday'].textarea.style.color = '#d9534f '}
              onFocus={this.handleTableCellFocus(time, 'thursday').bind(this)}
              onBlur={this.handleChange(time, 'thursday').bind(this)}
            ></TextareaAutosize>
          </td>
          <td style={style.editableTD}>
            <TextareaAutosize
              className="form-control"
              style={this.calculateCellStyle(time, 'friday')}
              defaultValue={this.state[time].friday}
              ref={input => this[time + 'friday'] = input}
              onChange={() => this[time + 'friday'].textarea.style.color = '#d9534f '}
              onFocus={this.handleTableCellFocus(time, 'friday').bind(this)}
              onBlur={this.handleChange(time, 'friday').bind(this)}
            ></TextareaAutosize>
          </td>
          <td style={style.editableTD}>
            <TextareaAutosize
              className="form-control"
              style={this.calculateCellStyle(time, 'saturday')}
              defaultValue={this.state[time].saturday}
              ref={input => this[time + 'saturday'] = input}
              onChange={() => this[time + 'saturday'].textarea.style.color = '#d9534f '}
              onFocus={this.handleTableCellFocus(time, 'saturday').bind(this)}
              onBlur={this.handleChange(time, 'saturday').bind(this)}
            ></TextareaAutosize>
          </td>
          <td style={style.editableTD}>
            <TextareaAutosize
              className="form-control"
              style={this.calculateCellStyle(time, 'sunday')}
              defaultValue={this.state[time].sunday}
              ref={input => this[time + 'sunday'] = input}
              onChange={() => this[time + 'sunday'].textarea.style.color = '#d9534f '}
              onFocus={this.handleTableCellFocus(time, 'sunday').bind(this)}
              onBlur={this.handleChange(time, 'sunday').bind(this)}
            ></TextareaAutosize>
          </td>
        </tr>
      )
    });

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
  getTableData,
  updateTableCell,
  showColorButtons,
  hideColorButtons,
  setCurrentlyFocusedCell
};

export default connect(mapStateToProps, mapDisaptchToProps)(Timetable);