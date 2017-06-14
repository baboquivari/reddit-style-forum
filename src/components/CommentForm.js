import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = (props) => {
  return (
    <article className="media box is-marginless form">
      <figure className="media-left">
        <p className="image is-64x64">
          <img id="form-avatar" src={props.avatar_url} alt="northcoder" />
        </p>
      </figure>
      <form className="media-content"
        onSubmit={props.submitHandler}>
        <textarea className="textarea" placeholder="join the conversation..."
          value={props.input}
          onChange={props.inputHandler} />
        <button id="formButton" className="button is-success is-pulled-right"
          type="submit" value="post">submit comment
        </button>
      </form>
    </article>
  );
};

CommentForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  inputHandler: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired
};

export default CommentForm;
