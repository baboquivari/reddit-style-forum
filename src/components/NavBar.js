import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

export const NavBar = (props) => {
  return (
    <nav className="nav has-shadow">
      <div className="nav-center">
        <NavLink to={'/'}>
          home
        </NavLink>
        {generateTopics(props.topics)}
      </div>
    </nav>
  );
};


const generateTopics = (topics) => {
  return topics.map((topic, i) => {
    return (
      <NavLink key={i}
        to={`/topics/${topic.title.toLowerCase()}`}>
        {topic.title.toLowerCase()}
      </NavLink>
    );
  });
};

NavBar.propTypes = {
  topics: PropTypes.array.isRequired
};

export default NavBar;
