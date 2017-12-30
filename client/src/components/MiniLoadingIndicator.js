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

  const cross = {
    color: '#d9534f'
  };

  return (
    <div style={container}>
      { props.visible ?
        <div>
          { props.loading ? 
            <i className="fa fa-spinner" style={spinner}></i>
            :
            <div>
              { props.error ?
                <i className="fa fa-times" style={cross}></i>
                :
                <i className="fa fa-check" style={tick}></i>
              }
            </div>
          }
        </div>
      : null }
    </div>
  );
};

export default MiniLoadingIndicator;