/* eslint-env node, mocha, chai */
import { expect } from 'chai';
import articlesReducer from '../src/reducer/articles.reducer';
import * as actions from '../src/actions/actions';

describe('articles.reducer', () => {
  it('handles FETCH_ARTICLES_REQUESTS', () => {
    const action = actions.fetchArticlesRequest();
    const initialState = {
      fetching: false
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      fetching: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_ARTICLES_SUCCESS', () => {
    const action = actions.fetchArticlesSuccess([{_id: 1, data: 'articles'}], 'topic');
    const initialState = {
      fetching: true,
      data: {},
      topic: null
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      fetching: false,
      data: {1: {_id: 1, data: 'articles'}},
      topic: 'topic'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_ARTICLES_ERROR', () => {
    const action = actions.fetchArticlesError('error');
    const initialState = {
      fetching: true,
      error: null
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      fetching: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles VOTE_ARTICLE_REQUESTS', () => {
    const action = actions.voteArticleRequest();
    const initialState = {
      fetching: false
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      fetching: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles VOTE_ARTICLE_SUCCESS', () => {
    const action = actions.voteArticleSuccess({article: {_id: 1, votes: 3}});
    const initialState = {
      fetching: true,
      data: {1: {_id: 1, votes: 2}}
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      fetching: false,
      data: {1: {_id: 1, votes: 3}}
    };
    expect(actual).to.eql(expected);
    expect(expected.data).to.not.equal(initialState.data);
    expect(actual).to.not.equal(initialState);
  });

  it('handles VOTE_ARTICLE_ERROR', () => {
    const action = actions.voteArticleError('error');
    const initialState = {
      fetching: true,
      error: null
    };

    const actual = articlesReducer(initialState, action);
    const expected = {
      fetching: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });
});
