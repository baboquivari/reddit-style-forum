import React from 'react';
import {getTime} from '../lib/helpers';

const Comment = (props) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.avatar_url} alt="Image" />
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
           <a className="button is-danger is-outlined">
          <span>remove</span>
    <span className="icon is-small">
      <i className="fa fa-times"></i>
    </span>
            </a>
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
  _id: React.PropTypes.string.isRequired,
  votes: React.PropTypes.number.isRequired,
  body: React.PropTypes.string.isRequired,
  created_by: React.PropTypes.string.isRequired,
  created_at: React.PropTypes.number.isRequired,
  deleteComment: React.PropTypes.func.isRequired,
  voteComment: React.PropTypes.func.isRequired,
  avatar_url: React.PropTypes.string
};

export default Comment;
