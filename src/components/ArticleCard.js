import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import VoteButtons from './VoteArticleButtons';

const ArticleCard = (props) => {
  return (
    <li className="box">
      <article className="columns">
        <VoteButtons votes={props.votes}
          voteHandler={props.voteHandler.bind(null, props._id)} />

        <div className="column has-text-centered fullwidth">
          <NavLink to={`/articles/${props._id}`}>
            <div className="content">
              <h3 className="title is-3">{props.title}</h3>
              <div id="author">by {props.created_by}</div>
            </div>
          </NavLink>
        </div>
      </article>
    </li>
  );
};

ArticleCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  voteHandler: PropTypes.func.isRequired
};

export default ArticleCard;
