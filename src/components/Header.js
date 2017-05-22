import React from 'react';
import NavLink from './NavLink';
import NavBar from './NavBar';

const Header = (props) => {
  return (
    <header>      

      <div className="hero is-primary">
        <div className="hero-body">
          <div className="has-text-centered">
            <NavLink to="/">
              <h1 className="title is-1 uppercase">
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
  topics: React.PropTypes.array.isRequired
};

export default Header;