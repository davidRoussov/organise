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
        border: '0'
      },
      itemDetails: {
        minHeight: '60px'
      },
      col1: {
        width: '5%',
        textAlign: 'center'
      },
      detailsExpander: {
        fontSize: '19px',
        cursor: 'pointer',
        position: 'absolute',
        top: '7px',
        ':hover': {
          color: '#0275d8'
        }
      },
      col2: {
        width: '95%'
      },
      addItemButton: {
        marginTop: '10px'
      }
    };

    const renderedItems = this.state.items.map((item, i) => {
      return (
        <div key={i} style={style.item}>
          <div className="row" style={{width: '100%'}}>
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
          </div>
        </div>
      );
    });
    
    return (
      <div className="card">
        <h3 className="card-header">{this.props.currentCategory.categoryName}</h3>
        <div className="card-block">
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