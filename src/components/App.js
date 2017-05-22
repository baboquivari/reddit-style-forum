import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer.js';
import Header from './Header.js';
import { fetchTopics } from '../actions/actions'; // !!!!!!!!!!!!!!!!!!!!!!!!

class App extends Component {
  componentDidMount () {
    this.props.goFetchTopics();
  }

  // componenetWillReceiveProps (newProps) {

  // }


  render () {
    return (
      <div>
        <Header topics={this.props.topics} />

        <h3 className='title is-3'>All Articles</h3>
        {this.props.children}

        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    goFetchTopics: () => {
      dispatch(fetchTopics());
    }
  };
}

function mapStateToProps (state) {
  return {
    topics: state.topics.data
  };
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  topics: React.PropTypes.array.isRequired,
  goFetchTopics: React.PropTypes.func.isRequired

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
