/* eslint-env node, mocha, chai */
import { expect } from 'chai';
import usersReducer from '../src/reducer/users.reducer';
import * as actions from '../src/actions/actions';

describe('users.reducer', () => {
  it('handles FETCH_USERS_REQUESTS', () => {
    const action = actions.fetchUsersRequest();
    const initialState = {
      fetching: false
    };

    const actual = usersReducer(initialState, action);
    const expected = {
      fetching: true
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_USERS_SUCCESS', () => {
    const action = actions.fetchUsersSuccess([{_id: 1, username: 'usertest'}]);
    const initialState = {
      fetching: true,
      data: {}
    };

    const actual = usersReducer(initialState, action);
    const expected = {
      fetching: false,
      data: {usertest: {_id: 1, username: 'usertest'}}
    };
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(initialState);
  });

  it('handles FETCH_USERS_ERROR', () => {
    const action = actions.fetchUsersError('error');
    const initialState = {
      fetching: true,
      error: null
    };

    const actual = usersReducer(initialState, action);
    const expected = {
      fetching: false,
      error: 'error'
    };
    expect(actual).to.eql(expected);
  });
});
