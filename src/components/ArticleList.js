import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { voteArticle } from '../actions/actions';
import { articlesByVote } from '../lib/helpers';
import ArticleCard from './ArticleCard';
import Spinner from './Spinner';

class ArticleList extends Component {

  render () {
    if (!this.doneLoading()) return (<Spinner />);

    return (
      <main className="section">
        <ul className="container">
          {this.createArticles()}
        </ul>
      </main>
    );
  }

  createArticles () {
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
  }
  
}


function mapStateToProps (state) {
  return {
    articles: articlesByVote(state)
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
  articles: PropTypes.array.isRequired,
  voteHandler: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
