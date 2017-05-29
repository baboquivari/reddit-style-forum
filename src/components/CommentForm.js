import React from 'react';

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
        <textarea className="textarea" placeholder="Join the conversation..."
          value={props.input}
          onChange={props.inputHandler} />
        <button className="button is-success is-pulled-right"
          type="submit" value="post">Post comment
        </button>
      </form>
    </article>
  );
};

CommentForm.propTypes = {
  submitHandler: React.PropTypes.func.isRequired,
  inputHandler: React.PropTypes.func.isRequired,
  input: React.PropTypes.string.isRequired,
  avatar_url: React.PropTypes.string.isRequired
};

export default CommentForm;
