import * as types from '../actions/types';

const initialState = {
  data: {},
  fetching: false,
  error: null
};

function commentsReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.DELETE_COMMENT_REQUEST:
    case types.ADD_COMMENT_REQUEST:
    case types.VOTE_COMMENT_REQUEST:
    case types.FETCH_COMMENTS_REQUEST: {
      const newState = Object.assign({}, prevState);
      newState.fetching = true;
      return newState;
    }
    case types.FETCH_COMMENTS_SUCCESS: {
      const newState = Object.assign({}, prevState);
      newState.data = convertData(action.data);
      newState.fetching = false;
      return newState;
    }
    case types.VOTE_COMMENT_SUCCESS: {
      const newState = Object.assign({}, prevState);
      const newData = Object.assign({}, newState.data);

      let comment = newData[action.comment_id];
      // grabs the relevant comment

      if (action.vote === 'up') {
        comment.votes++;
      } else if (action.vote === 'down') {
        comment.votes--;
      }

      newState.data = newData;
      newState.fetching = false;
      return newState;
    }
    case types.ADD_COMMENT_SUCCESS: {
      const newState = Object.assign({}, prevState);
      const newData = Object.assign({}, newState.data);
      // we need 2 object.assigns here because we have a NESTED object within our state ('data') that we want to amend without mutating

      newData[action.comment._id] = action.comment;
      newState.data = newData;
      newState.fetching = false;
      return newState;
    }
    case types.DELETE_COMMENT_SUCCESS: {
      const newState = Object.assign({}, prevState);
      const newData = Object.assign({}, newState.data);

      delete newData[action.comment_id];
      newState.data = newData;
      newState.fetching = false;
      return newState;
    }
    case types.DELETE_COMMENT_ERROR:
    case types.ADD_COMMENT_ERROR:
    case types.VOTE_COMMENT_ERROR:
    case types.FETCH_COMMENTS_ERROR: {
      const newState = Object.assign({}, prevState);
      newState.error = action.error;
      newState.fetching = false;
      return newState;
    }
    default:
      return prevState;
  }
}

const convertData = (data) => {
  return data.reduce((acc, item) => {
    acc[item._id] = item;
    return acc;
  }, {});
};
// the PAYLOAD (data) comes in via the API as an ARRAY, so we need this function to convert it back into an OBJECT, for that's how we've chosen to store the data in our state, making it easier to access individual comments, rather than having to loop through them like we'd have to for an array.

export default commentsReducer;
