import React from 'react';
import VoteButtons from './VoteArticleButtons';

const Article = (props) => {
  return (
    <article className="columns">
      <VoteButtons votes={props.votes}
        voteHandler={props.voteHandler.bind(null, props._id)}
      />
      <div className="column">
        <h2 className="title is-3">{props.title}</h2>
        <span className="bold">by: {props.created_by}</span>
        <p>{props.body}</p>
      </div>
    </article>
  );
};

Article.propTypes = {
  _id: React.PropTypes.string.isRequired,
  votes: React.PropTypes.number.isRequired,
  voteHandler: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  created_by: React.PropTypes.string.isRequired
};

export default Article;
