import React from 'react';

const Spinner = () => {
  const style = {
    spinner: {
      
    }
  };

  return (
    <div>
      <i className="fa fa-spinner fa-spin" aria-hidden="true" style={style.spinner}></i>
    </div>
  );
};

export default Spinner;