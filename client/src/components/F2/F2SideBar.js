import React, { Component } from 'react';
import { FormControl, Button, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import Spinner from '../Spinner';
import { getCategories, createNewCategory, setCurrentCategory, createNote } from '../../actions/formatTwo';
import F2DeleteCategory from './F2DeleteCategory';

class F2SideBar extends Component {
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

  handleSelectCategory(categoryID) {
    if (this.props.currentCategory === categoryID) this.props.setCurrentCategory(null);
    else this.props.setCurrentCategory(categoryID);
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
      categoryButtonGroup: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
      },
      categoryButton: {
        width: '100%',
        borderRadius: '0px'
      },
      categoryButtonOptions: {
        borderRadius: '0px'
      },
      addNoteContainer: {
        marginTop: '20px'
      }
    }

    const categories = this.props.categories.map((category, i) => {
      return (
        <div key={i} style={style.categoryButtonGroup} className="btn-group">
          <button 
            style={style.categoryButton} 
            type="button" 
            className={category.id === this.props.currentCategory ? "btn btn-success" : "sidebar-button btn btn-transparent"}
            onClick={this.handleSelectCategory.bind(this, category.id)}
          >{category.categoryName}</button>
          <div className="btn-group" role="group">
            <button 
              style={style.categoryButtonOptions} 
              type="button" 
              className={category.id === this.props.currentCategory ? "btn btn-success dropdown-toggle" : "sidebar-button btn btn-transparent dropdown-toggle"}
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

        <div>
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

        <div style={style.addNoteContainer}>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.props.createNote.bind(null, this.props.currentCategory)}
          >Add Note</button>
        </div>

        <F2DeleteCategory
          show={this.state.deleteCategoryModalVisible}
          close={this.closeDeleteCategoryModal.bind(this)}
          category={this.state.categoryForModal}
        />

      </div>
    );
  }
}

const mapStateToProps = state => state.formatTwo;

const mapDispatchToProps = {
  createNewCategory,
  getCategories,
  setCurrentCategory,
  createNote
};

export default connect(mapStateToProps, mapDispatchToProps)(F2SideBar);