import React from 'react';
import NavLink from './NavLink';
// we're re-using code here from Navlink comp to make each ArticleCard a link which when clicked re-routes the app (in index.js via REACT ROUTER) to show the ArticlePage view/component.
import VoteButtons from './VoteArticleButtons';

const ArticleCard = (props) => {
  return (
    <li className="box">
      <article className="columns">
        <VoteButtons votes={props.votes}
          voteHandler={props.voteHandler.bind(null, props._id)} />
          {/* the above callback was passed in from the comp's parent container. it get's passed ANOTHER LEVEL into the VoteButtons component, where it's gets called, getting run up in the original ArticleList origin*/}

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
  _id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  created_by: React.PropTypes.string.isRequired,
  votes: React.PropTypes.number.isRequired,
  voteHandler: React.PropTypes.func.isRequired
};

export default ArticleCard;
