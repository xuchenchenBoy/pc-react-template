import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './routerWrapper.less';
import { linkTo, concatUrlAndQuery, } from '../../utils/url';

export default class RouterWrapper extends React.Component {
  componentWillMount () {
  }
  
  render () {
    return (
      <QueueAnim
        animConfig={[{ opacity:[1, 0] }, { opacity:[1, 0] }]}
        animatingClassName={['routerEnter', 'routerLeave']}
        duration={100}
        appear={false}
        onEnd={({key, type}) => {
          if (type === 'enter') {
            document.body.scrollTop = 0;
          }
        }}
      >
        <div className="animation-wrapper" key={this.props.location.pathname}>
          {this.props.children}
        </div>
      </QueueAnim>
    )
  }
}
