import React, { Component } from 'react';

import F3SideBar from './F3SideBar';
import F3MainContentArea from './F3MainContentArea';

class FormatThree extends Component {
  render() {
    const style = {
      container: {
        width: '100%',
        height: 'auto'
      },
      sidebar: {
        width: '15%',
        height: '100%',
        borderRight: '1px solid #f1f1f1',
        float: 'left'
      },
      mainContentArea: {
        marginLeft: '15%',
        backgroundColor: 'white',
        height: '100%'
      }
    };

    return (
      <div style={style.container}>
        <F3SideBar
          style={style.sidebar}
        />
        <F3MainContentArea
          style={style.mainContentArea}
        />
      </div>
    );
  }
};

export default FormatThree;