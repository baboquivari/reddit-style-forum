import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import NavBar from './NavBar';

const Header = (props) => {
  return (
    <header>
      <div className="front-page-header">
        <div className="hero-body">
          <div className="has-text-centered">
            <NavLink to="/">
              <h1 className="title is-1 lowercase">
                northcoders news
              </h1>
            </NavLink>
          </div>
        </div>
      </div>
      <NavBar topics={props.topics} />
    </header>
  );
};

Header.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Header;
