/* eslint-env node, mocha, chai */
import { expect } from 'chai';
import commentsReducer from '../src/reducer/comments.reducer';
import * as actions from '../src/actions/actions';

describe('comments.reducer', () => {
  it('handles FETCH_COMMENTS_REQUESTS', () => {
    const action = actions.fetchCommentsRequest();
    const initialState = {
      fetching: false
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_COMMENTS_SUCCESS', () => {
    const action = actions.fetchCommentsSuccess([{_id: 1, body: 'comment'}]);
    const initialState = {
      fetching: true,
      data: {}
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: false,
      data: {1: {_id: 1, body: 'comment'}}
    };
    expect(actual).to.eql(expected);
    expect(expected.data).to.not.equal(initialState.data);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_COMMENTS_ERROR', () => {
    const action = actions.fetchCommentsError('error');
    const initialState = {
      fetching: true,
      error: null
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
  });

  it('handles VOTE_COMMENT_REQUESTS', () => {
    const action = actions.voteCommentRequest();
    const initialState = {
      fetching: false
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles VOTE_COMMENT_SUCCESS UP', () => {
    const action = actions.voteCommentSuccess(1, 'up');
    const initialState = {
      fetching: true,
      data: {1: {votes: 2}}
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: false,
      data: {1: {votes: 3}}
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles VOTE_COMMENT_SUCCESS DOWN', () => {
    const action = actions.voteCommentSuccess(1, 'down');
    const initialState = {
      fetching: true,
      data: {1: {votes: 2}}
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: false,
      data: {1: {votes: 1}}
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles VOTE_COMMENT_ERROR', () => {
    const action = actions.voteCommentError('error');
    const initialState = {
      fetching: true,
      error: null
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
  });

  it('handles ADD_COMMENT_REQUESTS', () => {
    const action = actions.addCommentRequest();
    const initialState = {
      fetching: false
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles ADD_COMMENT_SUCCESS', () => {
    const action = actions.addCommentSuccess({_id: 2, comment: 'test'});
    const initialState = {
      fetching: true,
      data: {1: {comment: 'test'}}
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: false,
      data: {1: {comment: 'test'}, 2: {_id: 2, comment: 'test'}}
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles ADD_COMMENT_ERROR', () => {
    const action = actions.addCommentError('error');
    const initialState = {
      fetching: true,
      error: null
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
  });

  it('handles DELETE_COMMENT_REQUESTS', () => {
    const action = actions.deleteCommentRequest();
    const initialState = {
      fetching: false
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles DELETE_COMMENT_SUCCESS', () => {
    const action = actions.deleteCommentSuccess(1);
    const initialState = {
      fetching: true,
      data: {1: {comment: 'test'}}
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: false,
      data: {}
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles DELETE_COMMENT_ERROR', () => {
    const action = actions.deleteCommentError('error');
    const initialState = {
      fetching: true,
      error: null
    };

    const actual = commentsReducer(initialState, action);
    const expected = {
      fetching: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
  });
});
