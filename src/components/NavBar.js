import React from 'react';
import NavLink from './NavLink';

const NavBar = (props) => {
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

const generateTopics = (topics) => {
  return topics.map((topic, i) => {
    return (
      <NavLink 
        key={i}
        linkClass="nav-item is-tab uppercase"
        to={`/topics/${topic.title.toLowerCase()}/articles`}>
        {topic.title}
      </NavLink>
    );
  });
};

NavBar.propTypes = {
  topics: React.PropTypes.array.isRequired
};

export default NavBar;
