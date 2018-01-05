import React from 'react';

const Spinner = props => {
  const style = {
    spinner: {
      fontSize: props.size || '20px'
    }
  };

  return (
    <div>
      <i className="fa fa-spinner fa-spin" aria-hidden="true" style={style.spinner}></i>
    </div>
  );
};

export default Spinner;