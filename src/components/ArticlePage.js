import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComments, voteComment, addComment, deleteComment, voteArticle, fetchUsers } from '../actions/actions';
import Spinner from './Spinner';
import Article from './Article';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { sortByDate, resetInput } from '../lib/helpers';

class ArticlePage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      input: ''
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount () {
    this.props.fetchComments(this.props.params.article_id);
    this.props.fetchUsers();
  }
    
  render () {
    if (!this.doneLoading()) return (<Spinner />);    
    return (
      <main className="section">
          <section className="container box">
            {this.createArticle()}
            {this.createForm()}
            <ul className="box no-top-borderadius">
              {this.createComments()}
            </ul>
          </section>
      </main>
    );    
  }

  createArticle () {
    let {article_id} = this.props.params;
    let article = this.props.articles[article_id];

    return (
      <Article
        key={article_id}
        _id={article_id}
        votes={article.votes}
        voteHandler={this.props.voteArticle}
        title={article.title}
        body={article.body}
        created_by={article.created_by}
      />
    );
  }

  createForm () {
    return (
      <CommentForm
        inputHandler={this.inputHandler}
        submitHandler={this.submitHandler}
        input={this.state.input}
        avatar_url={this.props.users.northcoder.avatar_url}
      />
    );
  }

  createComments () {
    let {comments} = this.props;
    let {users} = this.props;

    return comments.map((comment, i) => {
      return (
        <Comment
          key={i}
          _id={comment._id}
          votes={comment.votes}
          voteComment={this.props.voteComment}
          body={comment.body}
          created_by={comment.created_by}
          created_at={comment.created_at}
          deleteComment={this.props.deleteComment}
          avatar_url={users[comment.created_by].avatar_url}
        />
      );
    });
  }

  inputHandler (event) {
    let {value} = event.target;

    this.setState({
      input: value
    });
  }

  submitHandler (event) {
    event.preventDefault();

    let {article_id} = this.props.params;
    let {input} = this.state;

    this.props.addComment(article_id, input);

    this.setState(resetInput);
  }

  doneLoading () {
    if (Object.keys(this.props.comments).length && Object.keys(this.props.articles).length && Object.keys(this.props.users).length) return true;
  }
}


function mapDispatchToProps (dispatch) {
  return {
    fetchComments: (article_id) => {
      dispatch(fetchComments(article_id));
    },
    voteArticle: (article_id, vote) => {
      dispatch(voteArticle(article_id, vote));
    },
    voteComment: (comment_id, vote) => {
      dispatch(voteComment(comment_id, vote));
    },
    addComment: (article_id, comment) => {
      dispatch(addComment(article_id, comment));
    },
    deleteComment: (comment_id) => {
      dispatch(deleteComment(comment_id));
    },
    fetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles.data,
    comments: sortByDate(state.comments.data),
    users: state.users.data,
    articleVote: state.articles.vote
  };
}

ArticlePage.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  users: PropTypes.object.isRequired,
  voteComment: PropTypes.func.isRequired,
  voteArticle: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
