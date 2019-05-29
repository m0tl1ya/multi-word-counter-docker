import React, { Component } from 'react';

import TitleBar from './TitleBar';
import MultiWordCounter from '../containers/MultiWordCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <MultiWordCounter />
      </div>
    );
  }
}

export default App;