import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SettingsModal extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log("submitting timetable settings");
  }

  render() {
    const style = {
      visibleTimeTD: {
        textAlign: 'center'
      }
    };

    const hours = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00", "00:00"];
    const tbody = [];
    for (let i = 0; i < hours.length - 1; i++) {
      tbody.push(
        <tr key={i}>
          <td style={style.visibleTimeTD}>{hours[i] + " - " + hours[i + 1]}</td>
          <td style={style.visibleTimeTD}><Input type="radio" name={"timesVisible"+i} /></td>
          <td style={style.visibleTimeTD}><Input type="radio" name={"timesVisible"+i} /></td>
        </tr>
      );
    }

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
                    <th>Not visible</th>
                  </tr>
                </thead>
                <tbody>
                  {tbody}
                </tbody>
              </table>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option one is this and that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option two can be something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Option three is disabled
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Check me out
              </Label>
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

};

export default connect(mapStateToProps, mapDisaptchToProps)(SettingsModal);