import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import { updateTimetableVisibleTimes } from '../../actions/timetable';

class SettingsModal extends Component {
  constructor() {
    super();
    this.state = {
      times: {}
    };
  }

  componentWillMount() {
    const hours = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00", "00:00"];
    hours.reduce((acc, time) => 
      acc.then(() => this.setState({ times: { ...this.state.times, [time]: false }}, () => Promise.resolve())), 
        Promise.resolve());
  }    

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTimetableVisibleTimes(this.state.times);
    this.props.close();
  }

  handleChange(e) {
    const time = e.target.name;
    this.setState({ times: { ...this.state.times, [time]: !this.state.times[time] }});
  }

  render() {
    const style = {
      visibleTimeTD: {
        textAlign: 'center'
      }
    };

    const tbody = this.state.times && Object.keys(this.state.times).map((time, i) => 
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
                    <th>Not Visible</th>
                    <th>Visible</th>
                  </tr>
                </thead>
                <tbody>
                  {tbody}
                </tbody>
              </table>
            </FormGroup>

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
  updateTimetableVisibleTimes
};

export default connect(mapStateToProps, mapDisaptchToProps)(SettingsModal);