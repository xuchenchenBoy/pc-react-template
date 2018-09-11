import React from 'react';
import ViewConfig from '../../components/ViewConfig';
import './index.less';

class Page404 extends React.PureComponent {
  render () {
    return (
      <section className="modifyPassword">
        <ViewConfig documentTitle="页面未找到"/>
        <div className="page404Wrap">404 NOT FOUND</div>
      </section>
    )
  }
}

export default Page404;