// NEED TO COMPLETE THIS, THEN INTEGRATE INTO HEADER.JS (IE: GO THROUGH ALL THE COMMENTED OUT CODE IN HEADER.JS)

import React from 'react';
import NavLink from './NavLink';

export const NavBar = (props) => {
  return (
    <nav className="nav has-shadow">
      <div className="nav-center">
        <NavLink linkClass="nav-item is-tab uppercase" to={'/'}>
          all
        </NavLink>
        {generateTopics(props.topics)}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  topics: React.PropTypes.array.isRequired
};

const generateTopics = topics => {
  return topics.map((topic, i) => {
    return (
      <NavLink key={i}
        linkClass="nav-item is-tab uppercase"
        to={`/topics/${topic.title.toLowerCase()}`}>
        {topic.title}
      </NavLink>
    );
  });
};

export default NavBar;
