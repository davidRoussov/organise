import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveCategory } from '../../actions/formatThree';

class F3Note extends Component {
  handleAddItem(e) {
    e.preventDefault();
    
    const newItems = this.props.currentCategory.items.concat({
      itemTitle: '',
      itemDetails: ''
    });
    const newCategory = {
      ...this.props.currentCategory,
      items: newItems
    };
    this.props.saveCategory(newCategory);
  }

  render() {
    return (
      <div className="card">
        <h3 className="card-header">{this.props.currentCategory.categoryName}</h3>
        <div className="card-block">




          <a href='#' className="btn btn-primary" onClick={this.handleAddItem.bind(this)}>Add item</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.formatThree;

const mapDispatchToProps = {
  saveCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(F3Note);