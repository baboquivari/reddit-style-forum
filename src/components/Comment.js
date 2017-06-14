import React from 'react';
import PropTypes from 'prop-types';
import {getTime} from '../lib/helpers';

const Comment = (props) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img id="ncAvatar" src={props.avatar_url} alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.created_by}</strong> <small>{getTime(props.created_at)}</small>
              <br />
              {props.body}
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <a className="level-item is-success fa fa-plus-circle"
                onClick={props.voteComment.bind(null, props._id, 'up')} />
              <span className="level-item">Votes: {props.votes}</span>
              <a className="level-item fa fa-minus-circle"
                onClick={props.voteComment.bind(null, props._id, 'down')} />
            </div>
          </nav>
        </div>
        <div>
          <button id="commentButton" onClick={deleteHandler.bind(null, props)} className="button is-danger">
            <span className="icon is-small">
              <i className="fa fa-times"></i>
            </span>
          </button>
        </div>
      </article>
    </div>
  );
};


const deleteHandler = (props) => {
  let {_id, created_by} = props;

  if (created_by !== 'northcoder') {
    return window.alert('Not allowed - unauthorised user');
  }

  props.deleteComment(_id);
};

Comment.propTypes = {
  _id: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired,
  created_at: PropTypes.number.isRequired,
  deleteComment: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
  avatar_url: PropTypes.string
};

export default Comment;
