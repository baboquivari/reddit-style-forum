import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goFetchTopics, goFetchArticles } from '../actions/actions';
import { getTopic } from '../lib/helpers';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  
  componentDidMount () {
    this.props.fetchTopics();
    this.props.fetchArticles(getTopic(this.props));
  }

  componentWillReceiveProps (newProps) {
    if (newProps.fetchingArticles || this.props.fetchingArticles) return;

    const newTopic = getTopic(newProps);
    const oldTopic = getTopic(this.props);

    if (newTopic !== oldTopic) {
      this.props.fetchArticles(newTopic);
    }
  }

  render () {
    return (
      <div id="main">
          <Header topics={this.props.topics} />
          {this.props.children}
          <Footer />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: (topic) => {
      dispatch(goFetchArticles(topic));
    },
    fetchTopics: () => {
      dispatch(goFetchTopics());
    }
  };
}

function mapStateToProps (state) {
  return {
    topics: state.topics.data,
    topic: state.articles.topic,
    fetchingArticles: state.articles.fetching,
    articles: state.articles.data
  };
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired,
  topic: PropTypes.string,
  params: PropTypes.object,
  fetchingArticles: PropTypes.bool.isRequired,
  articles: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
