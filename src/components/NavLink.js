import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const NavLink = (props) => {
  return (
    <Link {...props} className="nav-item is tab" activeClassName="is-active" />
  );
};

NavLink.propTypes = {
  linkClass: PropTypes.string
};

export default NavLink;
