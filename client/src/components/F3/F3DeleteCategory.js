import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { deleteCategory } from '../../actions/formatThree';

class F3DeleteCategory extends Component {
  handleDeleteCategory() {
    this.props.deleteCategory(this.props.category.id);
    this.props.close();
  }

  render() {
    const categoryName = (this.props.category && this.props.category.categoryName) || '';
    return (
      <Modal isOpen={this.props.show} toggle={this.props.close} className="danger">
        <ModalHeader toggle={this.toggle}>Delete: {categoryName}?</ModalHeader>
        <ModalBody>
          Confirm the deletion of this category by clicking 'Delete'. Warning: this will delete the associated notes.
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.handleDeleteCategory.bind(this)}>Delete</Button>
          <Button color="secondary" onClick={this.props.close}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => state.formatTwo;

const mapDispatchToProps = {
  deleteCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(F3DeleteCategory);