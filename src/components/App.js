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
    // THIS LIFECYCLE FUNC ONLY GETS CALLED ONCE, AFTER THE VERY FIRST RENDER. NEVER AGAIN.
    // this is where AJAX requests and STATE updates should occur
    // we are using it to UPDATE THE STATE so we can trigger the OTHER lifecycle methods 
    // the 'getTopic' call composed inside 'fetchArticles' returns us 'home' when opening up the landing page. 
  }

  componentWillReceiveProps (newProps) {
    // APP receives new props every time a TOPIC is selected OR an ARTICLE is selected
    // it's triggered as soon as the props are updated via a state-change in the store, and BEFORE another render
    // we call the getTopic function inside here (to set our relevant topics or articles). We can't rely on the 'componentDidMount' lifecycle method (above) to do this for us, because it only ever gets called ONCE, right after the first render.

    if (newProps.fetchingArticles || this.props.fetchingArticles) return;
    // if the NEW 'fetchingArticles' prop OR the EXISTING 'fetchingArticles' prop is set to TRUE (ie: there is loading happening), then this function can just stop running here and do nothing.

    const newTopic = getTopic(newProps); // eg. returns 'football'
    const oldTopic = getTopic(this.props); // e.g. 'home'

    if (newTopic !== oldTopic) {
      this.props.fetchArticles(newTopic);
      // if a new topic has come in via params (from react-router), then we call 'fetchArticles', passing it the STRING of the newTopic. This is basically firing off a new API request each time a new topic comes in from react-router.
      // so the STATE has now been updated, showing a fresh set of topic-specific-only articles, the topic property on it is now set to a topic, and the Provider now goes, 'Hey! There's been a state change! I'm gonna trigger a re-render and pass down all this new state info AS PROPS for all my little children!'. So now, all the props get updated in the relevant components (via mapStateToProps) and so the RENDER function has fresh new data to render. HELLS YEAH.
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
  // this gets called and re-sets its props every time the STATE changes
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
