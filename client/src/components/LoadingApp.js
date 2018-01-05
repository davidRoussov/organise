import React from 'react';

const LoadingApp = () => {
  const style = {
    container: {
      width: '100%',
      height: '100%'
    },
    spinner: {
      fontSize: '64px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      margin: '-32px 0 0 -32px'
    }
  };

  return(
    <div style={style.container}>
      <i className="fa fa-spinner fa-spin" aria-hidden="true" style={style.spinner}></i>
    </div>
  );
}

export default LoadingApp;