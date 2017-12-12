import React, { Component } from 'react';
import { FormControl, Button, FormGroup } from 'react-bootstrap';

class F2SideBar extends Component {
  constructor() {
    super();
    this.state = {
      displayAddCategory: false,
      newCategoryName: ''
    };
  }

  handleSubmitAddCategoy(e) {
    e.preventDefault();
    console.log('submitting new category');
    console.log(this.state.newCategoryName);
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
      }
    }

    return (
      <div style={containerStyle}>

        <div style={style.addCategory}>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={this.showAddCategory.bind(this)}
          >Add category</button>
          { this.state.displayAddCategory ? 
            <div style={style.addCategoryDiv}>
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
            </div> : null
          }
        </div>
      </div>
    );
  }
}

export default F2SideBar;