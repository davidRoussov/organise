import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import { updateTimetableSettings, getTableData } from '../../actions/timetable';

class SettingsModal extends Component {
  constructor() {
    super();

    const hours = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00", "00:00"];
    const times = {};
    for(let i = 0; i < hours.length - 1; i++) {
      const time = hours[i] + ' - ' + hours[i + 1];
      times[time] = false
    }

    this.state = {
      times,
      twelveHours: false
    };
  }

  componentDidMount() {
    this.props.getTableData();
  }
  
  componentWillReceiveProps(props) {
    if(props.timetableData && props.timetableData.visibleTimes) {
      this.setState({ times: props.timetableData.visibleTimes });
    }

    if(props.timetableData && props.timetableData.twelveHours) {
      this.setState({ twelveHours: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTimetableSettings(this.state.times, this.state.twelveHours);
    this.props.close();
  }

  handleChange(e) {
    const time = e.target.name;
    this.setState({ times: { ...this.state.times, [time]: !this.state.times[time] }});
  }

  handleChangeTimeFormat = () => this.setState({ twelveHours: !this.state.twelveHours })

  render() {
    const style = {
      visibleTimeTD: {
        textAlign: 'center'
      }
    };

    const tbody = this.state.times && Object.keys(this.state.times).sort().map((time, i) => 
      <tr key={i}>
        <td style={style.visibleTimeTD}>{time}</td>
        <td style={style.visibleTimeTD}><Input type="radio" name={time} checked={this.state.times[time]} onChange={this.handleChange.bind(this)}/></td>
        <td style={style.visibleTimeTD}><Input type="radio" name={time} checked={!this.state.times[time]} onChange={this.handleChange.bind(this)}/></td>
      </tr>
    );

    return (
      <Modal isOpen={this.props.show} toggle={this.props.close} className="danger">
        <ModalHeader toggle={this.toggle}>Timetable Settings</ModalHeader>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <ModalBody>

            <FormGroup>
              <Label>Select visible times</Label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Visible</th>
                    <th>Not Visible</th>
                  </tr>
                </thead>
                <tbody>
                  {tbody}
                </tbody>
              </table>
            </FormGroup>
            <hr/>

            <FormGroup>
              <Label>Display 12 hour or 24 hour time format</Label><br/>
              <Label check>
                <Input type="radio" name="timeFormat" checked={this.state.twelveHours} onChange={this.handleChangeTimeFormat.bind(this)} inline="true"/>
                12 hour
              </Label>
              <Label check>
                <Input type="radio" name="timeFormat" checked={!this.state.twelveHours} onChange={this.handleChangeTimeFormat.bind(this)} inline="true"/>
                24 hour
              </Label>
            </FormGroup>
            <hr/>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.close}>Cancel</Button>
            <Button color="primary" type="submit">Save</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => state.timetable;

const mapDisaptchToProps = {
  updateTimetableSettings,
  getTableData
};

export default connect(mapStateToProps, mapDisaptchToProps)(SettingsModal);