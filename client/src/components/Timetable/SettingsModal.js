import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SettingsModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.show} toggle={this.props.close} className="danger">
        <ModalHeader toggle={this.toggle}>skfjnsfje</ModalHeader>
        <ModalBody>
          sregregsregregsregreg
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.close}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => state.timetable;

const mapDisaptchToProps = {

};

export default connect(mapStateToProps, mapDisaptchToProps)(SettingsModal);