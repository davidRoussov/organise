import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';

import SettingsModal from './SettingsModal';

import { closeTimetableModal, getTableData } from '../../actions/timetable';

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
      this.setState({ data: props.timetableData.data });
    }
  }

  handleChange = (time, day) => e => {
    // let data = { ...this.state[time] };
    // data[day] = e.target.value;
    // this.setState({ [time]: data });

    console.log('***');
    console.log(time, day);
    console.log(e.target.value);
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
      cellInput: {
        width: '100%',
        minHeight: '46px',
        background: 'transparent',
        border: '0',
        borderRadius: '0px'
      },
      editableTD: {
        padding: '0px'
      }
    };

    const visibleTimes = 
      (this.props.timetableData && this.props.timetableData.visibleTimes && Object.keys(this.props.timetableData.visibleTimes)
        .filter(time => this.props.timetableData.visibleTimes[time])) || []

    const tbody = visibleTimes.sort().map((time, i) =>
      <tr key={i}>
        <td>{time}</td>
        <td style={style.editableTD}>
          <TextareaAutosize
            className="form-control"
            style={style.cellInput}
            defaultValue={this.state[time].monday}
            ref={input => this[time + 'monday'] = input}
            onChange={() => this[time + 'monday'].textarea.style.color = 'red'}
            onBlur={this.handleChange(time, 'monday').bind(this)}
          ></TextareaAutosize>
        </td>
        <td style={style.editableTD}>
          <TextareaAutosize
            className="form-control"
            style={style.cellInput}
            defaultValue={this.state[time].tuesday}
            ref={input => this[time + 'tuesday'] = input}
            onChange={() => this[time + 'tuesday'].textarea.style.color = 'red'}
            onBlur={this.handleChange(time, 'tuesday').bind(this)}
          ></TextareaAutosize>
        </td>
        <td style={style.editableTD}>
          <TextareaAutosize
            className="form-control"
            style={style.cellInput}
            defaultValue={this.state[time].wednesday}
            ref={input => this[time + 'wednesday'] = input}
            onChange={() => this[time + 'wednesday'].textarea.style.color = 'red'}
            onBlur={this.handleChange(time, 'wednesday').bind(this)}
          ></TextareaAutosize>
        </td>
        <td style={style.editableTD}>
          <TextareaAutosize
            className="form-control"
            style={style.cellInput}
            defaultValue={this.state[time].thursday}
            ref={input => this[time + 'thursday'] = input}
            onChange={() => this[time + 'thursday'].textarea.style.color = 'red'}
            onBlur={this.handleChange(time, 'thursday').bind(this)}
          ></TextareaAutosize>
        </td>
        <td style={style.editableTD}>
          <TextareaAutosize
            className="form-control"
            style={style.cellInput}
            defaultValue={this.state[time].friday}
            ref={input => this[time + 'friday'] = input}
            onChange={() => this[time + 'friday'].textarea.style.color = 'red'}
            onBlur={this.handleChange(time, 'friday').bind(this)}
          ></TextareaAutosize>
        </td>
        <td style={style.editableTD}>
          <TextareaAutosize
            className="form-control"
            style={style.cellInput}
            defaultValue={this.state[time].saturday}
            ref={input => this[time + 'saturday'] = input}
            onChange={() => this[time + 'saturday'].textarea.style.color = 'red'}
            onBlur={this.handleChange(time, 'saturday').bind(this)}
          ></TextareaAutosize>
        </td>
        <td style={style.editableTD}>
          <TextareaAutosize
            className="form-control"
            style={style.cellInput}
            defaultValue={this.state[time].sunday}
            ref={input => this[time + 'sunday'] = input}
            onChange={() => this[time + 'sunday'].textarea.style.color = 'red'}
            onBlur={this.handleChange(time, 'sunday').bind(this)}
          ></TextareaAutosize>
        </td>
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