import React, { Component } from 'react';
import { FormControl, Button, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import Spinner from '../Spinner';
import { getCategories, createNewCategory, setCurrentCategory } from '../../actions/formatThree';
import F3DeleteCategory from './F3DeleteCategory';

class F3SideBar extends Component {
  constructor() {
    super();
    this.state = {
      displayAddCategory: false,
      newCategoryName: '',
      deleteCategoryModalVisible: false
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }

  handleSubmitAddCategory(e) {
    e.preventDefault();
    this.props.createNewCategory(this.state.newCategoryName);
  }

  handleSelectCategory(category) {
    this.props.setCurrentCategory(category);
  }

  handleChangeAddCategory = e => this.setState({ newCategoryName: e.target.value });
  handleCancelAddCategory = () => this.setState({ newCategoryName: '', displayAddCategory: false });  
  showAddCategory = () => this.setState({ displayAddCategory: true});

  showDeleteCategoryModal = category => () => this.setState({ categoryForModal: category, deleteCategoryModalVisible: true });
  closeDeleteCategoryModal = () => this.setState({ deleteCategoryModalVisible: false });

  render() {
    const containerStyle = {
      ...this.props.style,
      textAlign: 'center',
      minHeight: '100vh'
    };

    const style = {
      addCategory: {
        marginTop: '20px'
      },
      addCategoryDiv: {
        paddingTop: '10px',
        paddingRight: '10px',
        paddingLeft: '10px'
      },
      category: {
        width: '80%',
        borderRadius: '0px'
      }
    }

    const categories = this.props.categories.map((category, i) => {
      return (
        <div key={i} style={style.category} className="btn-group">
          <button 
            style={style.category} 
            type="button" 
            className={category.id === (this.props.currentCategory && this.props.currentCategory.id) ? "btn btn-success" : "btn btn-primary"}
            onClick={this.handleSelectCategory.bind(this, category)}
          >{category.categoryName}</button>
          <div className="btn-group" role="group">
            <button 
              style={{borderRadius: '0px'}} 
              type="button" 
              className={category.id === (this.props.currentCategory && this.props.currentCategory.id) ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"}
              data-toggle="dropdown"></button>
            <div className="dropdown-menu">
              <a className="dropdown-item">Edit</a>
              <a className="dropdown-item" onClick={this.showDeleteCategoryModal(category).bind(this)}>Delete</a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div style={containerStyle}>

        <div style={{marginTop: '20px'}}>
          {categories}
        </div>

        <div style={style.addCategory}>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={this.showAddCategory.bind(this)}
          >Add category</button>
          { this.state.displayAddCategory ? 
            <div style={style.addCategoryDiv}>
              { this.props.addCategorySpinnerVisible ? <Spinner/> :
                <form onSubmit={this.handleSubmitAddCategory.bind(this)}>
                  <FormGroup>
                    <div style={{margin: '10px'}}>
                      <FormControl
                        type="text"
                        placeholder="new category"
                        value={this.state.newCategoryName}
                        onChange={this.handleChangeAddCategory.bind(this)}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="btn-sm btn-primary"
                      style={{marginRight: '2px'}}
                    >Submit</Button>
                    <Button
                      type="button"
                      className="btn-sm btn-default"
                      onClick={this.handleCancelAddCategory.bind(this)}
                    >Cancel</Button>
                  </FormGroup>
                </form>
              }
            </div> : null
          }
        </div>

        <F3DeleteCategory
          show={this.state.deleteCategoryModalVisible}
          close={this.closeDeleteCategoryModal.bind(this)}
          category={this.state.categoryForModal}
        />

      </div>
    );
  }
}

const mapStateToProps = state => state.formatThree;

const mapDispatchToProps = {
  createNewCategory,
  getCategories,
  setCurrentCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(F3SideBar);