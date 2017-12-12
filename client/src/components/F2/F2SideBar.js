import React, { Component } from 'react';
import { FormControl, Button, FormGroup, SplitButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import Spinner from '../Spinner';
import { getCategories, createNewCategory } from '../../actions/formatTwo';

class F2SideBar extends Component {
  constructor() {
    super();
    this.state = {
      displayAddCategory: false,
      newCategoryName: ''
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }

  handleSubmitAddCategoy(e) {
    e.preventDefault();
    this.props.createNewCategory(this.state.newCategoryName);
  }

  handleChangeAddCategory = e => this.setState({ newCategoryName: e.target.value });
  handleCancelAddCategory = () => this.setState({ newCategoryName: '', displayAddCategory: false });  
  showAddCategory = () => this.setState({ displayAddCategory: true});

  render() {
    const containerStyle = {
      ...this.props.style,
      textAlign: 'center'
    };

    const style = {
      addCategory: {
        marginTop: '20px'
      },
      addCategoryDiv: {
        padding: '10px'
      },
      category: {
        width: '80%'
      }
    }

    const categories = this.props.categories.map((category, i) => {
      return (
        <div key={i} style={style.category} className="btn-group" role="group" aria-label="Button group with nested dropdown">
          <button style={style.category} type="button" className="btn btn-primary">{category.categoryName}</button>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a className="dropdown-item" href="#">Edit</a>
              <a className="dropdown-item" href="#">Delete</a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div style={containerStyle}>

        {categories}

        <div style={style.addCategory}>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={this.showAddCategory.bind(this)}
          >Add category</button>
          { this.state.displayAddCategory ? 
            <div style={style.addCategoryDiv}>
              { this.props.addCategorySpinnerVisible ? <Spinner/> :
                <form onSubmit={this.handleSubmitAddCategoy.bind(this)}>
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
      </div>
    );
  }
}

const mapStateToProps = state => state.formatTwo;

const mapDispatchToProps = {
  createNewCategory,
  getCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(F2SideBar);