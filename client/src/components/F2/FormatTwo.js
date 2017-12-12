import React, { Component } from 'react';

import F2SideBar from './F2SideBar'
import F2MainContentArea from './F2MainContentArea';

class FormatTwo extends Component {
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
        <F2SideBar
          style={style.sidebar}
        />
        <F2MainContentArea
          style={style.mainContentArea}
        />
      </div>
    );
  }
};

export default FormatTwo;