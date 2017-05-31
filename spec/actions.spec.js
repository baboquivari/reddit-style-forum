/* eslint-env node, mocha, chai */
import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import { expect } from 'chai';

describe('actions', () => {
  describe('fetchArticles', () => {
    it('Request: returns the expected action', () => {
      const action = actions.fetchArticlesRequest();
      expect(action).to.eql({
        type: types.FETCH_ARTICLES_REQUEST
      });
    });

    it('Success: returns the expected action', () => {
      const action = actions.fetchArticlesSuccess({}, 'topic');
      expect(action).to.eql({
        type: types.FETCH_ARTICLES_SUCCESS,
        data: {},
        topic: 'topic'
      });
    });

    it('Error: returns the expected action', () => {
      const action = actions.fetchArticlesError({});
      expect(action).to.eql({
        type: types.FETCH_ARTICLES_ERROR,
        error: {}
      });
    });
  });

  describe('fetchTopics', () => {
    it('Request: returns the expected action', () => {
      const action = actions.fetchTopicsRequest();
      expect(action).to.eql({
        type: types.FETCH_TOPICS_REQUEST
      });
    });

    it('Success: returns the expected action', () => {
      const action = actions.fetchTopicsSuccess({});
      expect(action).to.eql({
        type: types.FETCH_TOPICS_SUCCESS,
        data: {}
      });
    });

    it('Error: returns the expected action', () => {
      const action = actions.fetchTopicsError({});
      expect(action).to.eql({
        type: types.FETCH_TOPICS_ERROR,
        error: {}
      });
    });
  });

  describe('fetchComments', () => {
    it('Request: returns the expected action', () => {
      const action = actions.fetchCommentsRequest();
      expect(action).to.eql({
        type: types.FETCH_COMMENTS_REQUEST
      });
    });

    it('Success: returns the expected action', () => {
      const action = actions.fetchCommentsSuccess({});
      expect(action).to.eql({
        type: types.FETCH_COMMENTS_SUCCESS,
        data: {}
      });
    });

    it('Error: returns the expected action', () => {
      const action = actions.fetchCommentsError({});
      expect(action).to.eql({
        type: types.FETCH_COMMENTS_ERROR,
        error: {}
      });
    });
  });

  describe('voteArticle', () => {
    it('Request: returns the expected action', () => {
      const action = actions.voteArticleRequest();
      expect(action).to.eql({
        type: types.VOTE_ARTICLE_REQUEST
      });
    });

    it('Success: returns the expected action', () => {
      const action = actions.voteArticleSuccess({});
      expect(action).to.eql({
        type: types.VOTE_ARTICLE_SUCCESS,
        data: {}
      });
    });

    it('Error: returns the expected action', () => {
      const action = actions.voteArticleError({});
      expect(action).to.eql({
        type: types.VOTE_ARTICLE_ERROR,
        error: {}
      });
    });
  });

  describe('voteComment', () => {
    it('Request: returns the expected action', () => {
      const action = actions.voteCommentRequest();
      expect(action).to.eql({
        type: types.VOTE_COMMENT_REQUEST
      });
    });

    it('Success UP: returns the expected action', () => {
      const action = actions.voteCommentSuccess(1, 'up');
      expect(action).to.eql({
        type: types.VOTE_COMMENT_SUCCESS,
        comment_id: 1,
        vote: 'up'
      });
    });

    it('Success DOWN: returns the expected action', () => {
      const action = actions.voteCommentSuccess(1, 'down');
      expect(action).to.eql({
        type: types.VOTE_COMMENT_SUCCESS,
        comment_id: 1,
        vote: 'down'
      });
    });

    it('Error: returns the expected action', () => {
      const action = actions.voteCommentError({});
      expect(action).to.eql({
        type: types.VOTE_COMMENT_ERROR,
        error: {}
      });
    });
  });

  describe('addComment', () => {
    it('Request: returns the expected action', () => {
      const action = actions.addCommentRequest();
      expect(action).to.eql({
        type: types.ADD_COMMENT_REQUEST
      });
    });

    it('Success: returns the expected action', () => {
      const action = actions.addCommentSuccess({});
      expect(action).to.eql({
        type: types.ADD_COMMENT_SUCCESS,
        comment: {}
      });
    });

    it('Error: returns the expected action', () => {
      const action = actions.addCommentError({});
      expect(action).to.eql({
        type: types.ADD_COMMENT_ERROR,
        error: {}
      });
    });
  });

  describe('deleteComment', () => {
    it('Request: returns the expected action', () => {
      const action = actions.deleteCommentRequest();
      expect(action).to.eql({
        type: types.DELETE_COMMENT_REQUEST
      });
    });

    it('Success: returns the expected action', () => {
      const action = actions.deleteCommentSuccess(1);
      expect(action).to.eql({
        type: types.DELETE_COMMENT_SUCCESS,
        comment_id: 1
      });
    });

    it('Error: returns the expected action', () => {
      const action = actions.deleteCommentError({});
      expect(action).to.eql({
        type: types.DELETE_COMMENT_ERROR,
        error: {}
      });
    });
  });

  describe('fetchUsers', () => {
    it('Request: returns the expected action', () => {
      const action = actions.fetchUsersRequest();
      expect(action).to.eql({
        type: types.FETCH_USERS_REQUEST
      });
    });

    it('Success: returns the expected action', () => {
      const action = actions.fetchUsersSuccess([{}]);
      expect(action).to.eql({
        type: types.FETCH_USERS_SUCCESS,
        data: [{}]
      });
    });

    it('Error: returns the expected action', () => {
      const action = actions.fetchUsersError({});
      expect(action).to.eql({
        type: types.FETCH_USERS_ERROR,
        error: {}
      });
    });
  });
});
