import * as types from '../actions/types';

const initialState = {
  data: {},
  fetching: false,
  error: null
};

function usersReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST: {
      const newState = Object.assign({}, prevState);

      newState.fetching = true;
      return newState;
    }
    case types.FETCH_USERS_SUCCESS: {
      const newState = Object.assign({}, prevState);

      newState.data = convertToObject(action.data);
      newState.fetching = false;
      return newState;
    }
    case types.FETCH_USERS_ERROR: {
      const newState = Object.assign({}, prevState);

      newState.error = action.error;
      newState.fetching = false;
      return newState;
    }
    default:
      return prevState;
  }
}

const convertToObject = (users) => {
  return users.reduce((res, user) => {
    res[user.username] = user;
    return res;
  }, {});
};

export default usersReducer;
