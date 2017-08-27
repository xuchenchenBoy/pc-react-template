import React, { Component } from 'react';
import _styles from './index.css';

class App extends Component {
  onTestProxy() {
    // do request
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className={_styles.contentWrp} onClick={this.onTestProxy.bind(this)}>
          To get started hello
        </div>
      </div>
    );
  }
}

export default App;
