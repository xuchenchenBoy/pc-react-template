import React, { Component } from 'react';
import _styles from './index.css';

class App extends Component {
  onTestProxy() {
    console.log(this);
    fetch('/loginAuthor', { method: 'POST' });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className={_styles.contentWrp} onClick={this.onTestProxy}>
          To get started hello
        </p>
      </div>
    );
  }
}

export default App;
