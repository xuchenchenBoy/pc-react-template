import React, { Component } from 'react';
import _styles from './index.css';
import request from '../../utils/request';

class App extends Component {

  onTestProxy() {
    request.post('posts/server').send({name: 'xuchen'}).exec();
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
