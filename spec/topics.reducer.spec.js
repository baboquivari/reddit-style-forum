/* eslint-env node, mocha, chai */
import { expect } from 'chai';
import topicsReducer from '../src/reducer/topics.reducer';
import * as actions from '../src/actions/actions';

describe('topics.reducer', () => {
  it('handles FETCH_TOPICS_REQUESTS', () => {
    const action = actions.fetchTopicsRequest();
    const initialState = {
      fetching: false
    };

    const actual = topicsReducer(initialState, action);
    const expected = {
      fetching: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_TOPICS_SUCCESS', () => {
    const action = actions.fetchTopicsSuccess([{_id: 1, title: 'topics'}]);
    const initialState = {
      fetching: true,
      data: []
    };

    const actual = topicsReducer(initialState, action);
    const expected = {
      fetching: false,
      data: [{_id: 1, title: 'topics'}]
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_TOPICS_ERROR', () => {
    const action = actions.fetchTopicsError('error');
    const initialState = {
      fetching: true,
      error: null
    };

    const actual = topicsReducer(initialState, action);
    const expected = {
      fetching: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
  });
});
