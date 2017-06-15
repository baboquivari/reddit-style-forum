import React from 'react';
import PropTypes from 'prop-types';
import VoteButtons from './VoteArticleButtons';

const Article = (props) => {
  return (
    <article className="columns">
      <VoteButtons votes={props.votes}
        voteHandler={props.voteHandler.bind(null, props._id)}
        articleVote={props.articleVote}
      />
      <div className="column">
        <h2 className="title is-3">{props.title}</h2>
        <span className="bold">by: {props.created_by}</span>
        <p id="artBody">{props.body}</p>
      </div>
    </article>
  );
};

Article.propTypes = {
  _id: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  voteHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired};

export default Article;
