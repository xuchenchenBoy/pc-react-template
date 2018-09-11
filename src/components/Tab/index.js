import React from 'react';
import PropTypes from 'prop-types';
import './index.less'

export default class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.defaultActiveKey
    }
  }

  onChangeTab(tabKey) {
    this.setState({ activeKey: tabKey })
  }

  // 创建当前渲染内容
  createContent(props) {
    const { activeKey } = this.state;
    let content = null;
    const items = props.children.map(item => {
      const { tab, tabKey, children } = item.props;
      if (tabKey === activeKey) {
        content = children;
      }
      return { tab, tabKey };
    })
    return { content, items }
  }

  // 创建切换 tabs
  createTabs(items = []) {
    const { activeKey } = this.state;

    return (
      <ul className="tabs">
        {
          items.map(i => {
            const { tab, tabKey } = i;
            return (
              <li 
                key={tabKey} 
                onClick={() => { this.onChangeTab(tabKey) }} 
                className={activeKey === tabKey ? 'active item' : 'item'}
              >
                {tab}
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    const { content, items } = this.createContent(this.props);
    const tabs = this.createTabs(items);

    return (
      <div>
        {tabs}
        <div>{content}</div>
      </div>
    )
  }
}

Tabs.propTypes = {
  defaultActiveKey: PropTypes.string.isRequired
}

Tabs.TabPane = (props) => (
  <div>
    { props.children }
  </div>
)

Tabs.TabPane.propTypes = {
  tab: PropTypes.string.isRequired,
  tabKey: PropTypes.any.isRequired,
}


