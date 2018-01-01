import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';

import { saveCategory } from '../../actions/formatThree';

class F3EditCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoryName: ''
    }
  }

  handleEditCategory(e) {
    e.preventDefault();

    const newCategory = {
      ...this.props.category,
      categoryName: this.state.categoryName
    };
    this.props.saveCategory(newCategory);
    this.props.close();
  }

  handleChange = e => this.setState({ categoryName: e.target.value })

  render() {
    const categoryName = (this.props.category && this.props.category.categoryName) || '';
    return (
      <Modal isOpen={this.props.show} toggle={this.props.close}>
        <ModalHeader toggle={this.toggle}>Edit: {categoryName}?</ModalHeader>
        <form onSubmit={this.handleEditCategory.bind(this)}>
          <ModalBody>
            <Label for="newCategoryName">Enter new category name:</Label>
            <Input 
              type="text" 
              id="newCategoryName" 
              placeholder="category name"
              value={this.state.categoryName}
              onChange={this.handleChange.bind(this)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit">Submit</Button>
            <Button color="secondary" onClick={this.props.close}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => state.formatThree;

const mapDispatchToProps = {
  saveCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(F3EditCategory);