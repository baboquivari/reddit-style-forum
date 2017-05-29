import React, { Component } from 'react';
import { connect } from 'react-redux';
import { voteArticle } from '../actions/actions';
import { articlesByVote } from '../lib/helpers';
import ArticleCard from './ArticleCard';
import Spinner from './Spinner';

class ArticleList extends Component {

  render () {
    if (!this.doneLoading()) return (<Spinner />);
    // if no articles have been loaded onto the state just yet, return this Spinner component

    return (
      <main className="section">
        <ul className="container">
          {this.createArticles()}
        </ul>
      </main>
    );
  }

  createArticles () { // articles here is an array, sorted by vote popularity
    let {articles} = this.props;

    return articles.map((article, i) => {
      return (
        <ArticleCard
          key={i}
          _id={article._id}
          title={article.title}
          votes={article.votes}
          created_by={article.created_by}
          voteHandler={this.props.voteHandler}
        />
      );
    });
  }

  doneLoading () {
    return this.props.articles.length;
    // length should be 36 for 'home' topic, and obvs different for other topics.
  }
  
}


function mapStateToProps (state) {
  return {
    articles: articlesByVote(state) // articles here is an array, sorted by vote popularity. it WAS an object back up in this component's parent, APP.js
  };
}

function mapDispatchToProps (dispatch) {
  return {
    voteHandler: (article_id, vote) => {
      dispatch(voteArticle(article_id, vote));
    }
  };
}

ArticleList.propTypes = {
  articles: React.PropTypes.array.isRequired,
  voteHandler: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
