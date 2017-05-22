import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer.js';
import Header from './Header.js';


class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <h3 className='title is-3'>All Articles</h3>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default connect()(App);
