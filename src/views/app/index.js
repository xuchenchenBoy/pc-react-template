import React, { Component } from 'react';
import _styles from './index.css';

class App extends Component {
  onTestProxy() {
    fetch('/sztms/orderBill/orderList', { method: 'POST' });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className={_styles.contentWrp} onClick={this.onTestProxy.bind(this)}>
          To get started hello
        </p>
      </div>
    );
  }
}

export default App;
