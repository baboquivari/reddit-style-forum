import * as types from '../actions/types';

const initialState = {
  data: [],
  fetching: false,
  error: null
};

function topicsReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_TOPICS_REQUEST: {
      const newState = Object.assign({}, prevState);

      newState.fetching = true;
      return newState;
    }
    case types.FETCH_TOPICS_SUCCESS: {
      const newState = Object.assign({}, prevState);

      newState.data = action.data;
      newState.fetching = false;
      return newState;
    }
    case types.FETCH_TOPICS_ERROR: {
      const newState = Object.assign({}, prevState);

      newState.error = action.error;
      newState.fetching = false;
      return newState;
    }
    default:
      return prevState;
  }
}

export default topicsReducer;
