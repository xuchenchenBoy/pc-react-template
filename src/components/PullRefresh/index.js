import React from 'react';
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'
import DataNone from '../../components/DataNone'
import './index.less'

export default class PullRefresh extends React.Component {
  componentWillMount() {
    this.enableNext = this.props.enableNextPage || false; // 锁：控制是否加载下一页
    this._addEventRefresh = throttle(this.addEventRefresh.bind(this), 300);
  }

  componentDidMount() {
    window.addEventListener('scroll', this._addEventRefresh)
  }

  componentWillReceiveProps(nextProps) {
    this.enableNext = nextProps.enableNextPage;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._addEventRefresh)
  }

  addEventRefresh() {
    const { lowerThreshold = 30, getNextPage } = this.props;
    const { enableNext } = this;
    const clientH = document.documentElement.clientHeight || document.body.clientHeight;
    const scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop <= 0) return; // 无滚动条，禁止执行
    const currentScrollH = scrollTop + clientH; 
    const isFetch = ((currentScrollH + lowerThreshold) >= scrollH) && enableNext;
    if (isFetch) { // 是否可以加载更多
      this.enableNext = false;
      getNextPage && getNextPage();
    }
  }

  render() {
    const { enableNextPage } = this.props;
    const { isNoData } = this.props;

    return <div className="pull-refresh-wrapper">
      <p>{enableNextPage && '加载中...'}</p>
      <p>{(!enableNextPage && !isNoData) && ' 已经到底啦~ '}</p>
      {(!enableNextPage && isNoData) && (<DataNone dataNoneTxt="暂无数据" />)}
    </div>
  }
}

PullRefresh.propTypes = {
  isNoData: PropTypes.bool,
  enableNextPage: PropTypes.bool
}

PullRefresh.defaultProps = {
  isNoData: true, // 是否无数据
  enableNextPage: false, // 是否可加载下一页
}