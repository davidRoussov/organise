import React, { Component } from 'react';
import Radium from 'radium';

class MiniLoadingIndicator extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      cross: {
        color: '#d9534f',
        WebkitTransition: "0.5s",
        MozTransition: '0.5s',
        OTransition: '0.5s',
        transition: '0.5s'
      },
      tick: {
        color: '#27ae60',
        WebkitTransition: "0.5s",
        MozTransition: '0.5s',
        OTransition: '0.5s',
        transition: '0.5s'
      }
    };
  }

  componentWillReceiveProps(props) {
    if(this.state.visible && !props.visible) {
      this.setState({
        visible: true,
        cross: { 
          ...this.state.cross, 
          opacity: '0',
          visibility: 'hidden'
        },
        tick: { 
          ...this.state.tick, 
          opacity: '0',
          visibility: 'hidden'
        }
      }, 
      () => setTimeout(() => 
      this.setState({ 
        visible: false,
        cross: { 
          ...this.state.cross, 
          opacity: '1',
          visibility: 'visible'
        },
        tick: { 
          ...this.state.tick, 
          opacity: '1',
          visibility: 'visible'
        }
      }), 500));
    } else if(props.visible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const container = {
      position: 'fixed',
      bottom: '10px',
      right: '20px'
    };

    return (
      <div style={container}>
        { this.state.visible ?
          <div>
            { this.props.loading ? 
              <i className="fa fa-spinner"></i>
              :
              <div>
                { this.props.error ?
                  <i className="fa fa-times" style={this.state.cross}></i>
                  :
                  <i className="fa fa-check" style={this.state.tick}></i>
                }
              </div>
            }
          </div>
        : null }
      </div>
    );
  }
};

export default Radium(MiniLoadingIndicator);