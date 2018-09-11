import bind from 'autobind-decorator';
import React from 'react';
import PropTypes from 'prop-types'
import { remainParmas } from '../config';
import { concatUrlAndQuery } from '../utils/url';
import { Link as RouterLink } from 'react-router';

@bind
class Link extends React.PureComponent {
  static defaultProps = {
    onlyActiveOnIndex: true
  };

  getTargetQuery = () => {
    let targetQuery = {};
    const urlQuery = this.context.router.location.query;
    remainParmas.forEach(param => {
      urlQuery[param] && (targetQuery[param] = urlQuery[param]);
    });
    return targetQuery;
  }

  getRealLink = () => {
    const { to, query = {} } = this.props;
    if (!to) {
      return 'javascript:;';
    }
    let targetQuery = {...query, ...this.getTargetQuery()};

    return concatUrlAndQuery(to, targetQuery);
  }

  linkHref = (e) => {
    e.preventDefault();
    const { to, query = {} } = this.props;

    if (to && to.indexOf('http') > -1) {
      let targetQuery = {...query, ...this.getTargetQuery()};
      const url = concatUrlAndQuery(to, targetQuery);
      window.location.href = url;
    }
  }

  render () {
    const { query } = this.context.router.location;
    const { to, children, className: classNames, handleClick } = this.props;
    //const noLite = query.lite === '0';
    const noLite = 1;
    let liteProps = {};
    if (noLite) {
      liteProps.target = '_self';
    }
    if (to) {
      if (to.indexOf('http') > -1) {
        return (
          <a className={classNames} href={to}>{children}</a>
        )
      } else {
        return (
          <RouterLink {...liteProps} {...this.props} to={this.getRealLink()} />
        )
      }
    } else {
      return (
        <section>{children}</section>
      );
    }
  }
}

Link.propTypes = {
  ...RouterLink.propTypes,
  onlyActiveOnIndex: PropTypes.bool
}

Link.contextTypes = {
  router: PropTypes.object,
};

export default Link;
