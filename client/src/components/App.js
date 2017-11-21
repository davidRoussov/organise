import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, Tabs, Tab } from 'material-ui';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <AppBar title="My App">
        <Tabs>
          <Tab label="&nbsp;Item 1&nbsp;" />
          <Tab label="&nbsp;Item 2&nbsp;" />
          <Tab label="&nbsp;Item 3&nbsp;" />
          <Tab label="&nbsp;Item 4&nbsp;" />
        </Tabs>
      </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
