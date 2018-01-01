import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import Radium from 'radium';

import { saveCategory } from '../../actions/formatThree';

class F3Note extends Component {
  constructor() {
    super();
    this.state = {
      categoryName: '',
      items: []
    }
  }

  componentDidMount() {
    if(this.props.currentCategory) {
      this.setState({ ...this.props.currentCategory });
    }
  }

  componentWillReceiveProps(props) {
    if(props.currentCategory) {
      this.setState({ ...props.currentCategory });
    }
  }

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

  handleBlurItem = () => {
    const newCategory = {
      ...this.props.currentCategory,
      items: this.state.items
    }
    this.props.saveCategory(newCategory);
  }

  handleExpander = itemIndex => () => {
    const newItems = this.state.items.map((item, i) => {
      if(i !== itemIndex) return item;
      else if(item.detailsVisible) {
        return {
          ...item,
          detailsVisible: false
        }
      } else {
        return {
          ...item,
          detailsVisible: true
        }
      }
    });

    this.setState({ items: newItems });
  }

  handleChangeItemTitle = itemIndex => e => {
    const newItems = this.state.items.map((item, i) => {
      if(i !== itemIndex) return item;
      else {
        return {
          ...item,
          itemTitle: e.target.value
        }
      }
    });
    this.setState({ items: newItems });
  }

  handleChangeItemDetails = itemIndex => e => {
    const newItems = this.state.items.map((item, i) => {
      if(i !== itemIndex) return item;
      else {
        return {
          ...item,
          itemDetails: e.target.value
        }
      }
    });
    this.setState({ items: newItems });
  }

  handleDeleteItem = itemIndex => e => {
    e.preventDefault();

    const newItems = this.state.items.filter((item, i) => i !== itemIndex);
    const newCategory = {
      ...this.props.currentCategory,
      items: newItems
    };
    this.props.saveCategory(newCategory);
  }

  render() {
    const style = {
      item: {
        marginBottom: '10px',
        position: 'relative'
      },
      itemTitle: {
        height: '20px',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        outline: 'none',
        border: '0',
        ':hover': {
          backgroundColor: 'red'
        }
      },
      itemDetails: {
        minHeight: '60px',
        marginBottom: '10px'
      },
      col1: {
        flexGrow: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      detailsExpander: {
        fontSize: '19px',
        cursor: 'pointer'
      },
      col2: {
        flexGrow: '20'
      },
      col3: {
        flexGrow: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      addItemButton: {
        margin: '10px 0 20px 20px'
      },
      itemRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '100%',
        margin: '0px',
        ':hover': {
          background: '#ECECEC'
        }
      },
      itemMenuButton: {
        background: 'transparent'
      }
    };

    const renderedItems = this.state.items.map((item, i) => {
      return (
        <div key={i} style={style.item}>
          <div className="row" style={style.itemRow} key={i}>
            <div style={style.col1}>
              <i 
                key={i} 
                className={ item.detailsVisible ? "fa fa-angle-up" : "fa fa-angle-down" }
                aria-hidden="true" 
                style={style.detailsExpander}
                onClick={this.handleExpander(i).bind(this)}
              ></i>
            </div>
            <div style={style.col2}>
              <TextareaAutosize
                className="form-control"
                value={item.itemTitle}
                onChange={this.handleChangeItemTitle(i).bind(this)}
                style={style.itemTitle}
                placeholder='Enter item title'
                onBlur={this.handleBlurItem.bind(this)}
              ></TextareaAutosize>
              { item.detailsVisible ? 
                <TextareaAutosize
                  className="form-control"
                  value={item.itemDetails}
                  onChange={this.handleChangeItemDetails(i).bind(this)}
                  style={style.itemDetails}
                  placeholder='Enter item details'
                  onBlur={this.handleBlurItem.bind(this)}
                ></TextareaAutosize>
                : null
              }
            </div>
            <div style={style.col3} className="btn-group" role="group">
              <button 
              className="btn btn-default dropdown-toggle" 
              aria-hidden="true" 
              style={style.itemMenuButton} 
              data-toggle="dropdown"
              ></button>
              <ul className="dropdown-menu" role="menu">
                <a className="dropdown-item" onClick={this.handleDeleteItem(i).bind(this)}>Delete</a>
              </ul>
            </div>
          </div>
        </div>
      );
    });
    
    return (
      <div className="card">
        <h3 className="card-header" style={{marginBottom: '10px'}}>{this.props.currentCategory.categoryName}</h3>
        <div className="card-block" style={{padding: '0px'}}>
          { renderedItems }
          <button className="btn btn-primary" onClick={this.handleAddItem.bind(this)} style={style.addItemButton}>Add item</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.formatThree;

const mapDispatchToProps = {
  saveCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(F3Note));