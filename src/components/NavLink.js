import React from 'react';
import { Link } from 'react-router';

const NavLink = (props) => {
  return (
    <Link {...props} className={props.linkClass} activeClassName="is-active" />
  );
};

NavLink.propTypes = {
  linkClass: React.PropTypes.string
};

export default NavLink;
