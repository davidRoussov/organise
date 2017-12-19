import React from 'react';

const MiniLoadingIndicator = props => {
  const container = {
    position: 'fixed',
    bottom: '10px',
    right: '20px'
  };

  const tick = {
    color: '#27ae60'
  };

  const spinner = {

  };

  return (
    <div style={container}>
      { props.visible ?
        <div>
          { props.loading ? 
            <i className="fa fa-spinner" style={spinner}></i>
            :
            <i className="fa fa-check" style={tick}></i>
          }
        </div>
      : null }
    </div>
  );
};

export default MiniLoadingIndicator;