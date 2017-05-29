import React from 'react';
import NavLink from './NavLink';

export const NavBar = (props) => {
  return (
    <nav className="nav has-shadow">
      <div className="nav-center">
        <NavLink linkClass="nav-item is-tab lowercase" to={'/'}>
          home
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
        linkClass="nav-item is-tab lowercase"
        to={`/topics/${topic.title.toLowerCase()}`}>
        {topic.title.toLowerCase()}
      </NavLink>
    );
  });
};

export default NavBar;
