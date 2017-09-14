/**
 * Created by Administrator on 2017/2/23.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { autoBind } from '../../util/helper';
import { addTodo } from '../../reduces/login';
import _styles from './index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    autoBind(['clickAction'], this);
  }

  clickAction() {
    this.props.addTodo({ name: 'xuchenchen' });
    browserHistory.push('/login');
  }

  render() {
    const { requestStatus, result } = this.props;

    return (
      <div>
        <span className={_styles.textColor} onClick={this.clickAction}>click here (open console to see)</span>
        <br />
        <span>{`request status : ${requestStatus}`}</span>
        <br />
        <span>{`request result : ${result}`}</span>
      </div>
    );
  }
}

export default connect(state => ({
  ...state.login,
}), dispatch => (bindActionCreators({ addTodo }, dispatch)))(Login);
