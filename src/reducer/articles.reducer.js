import * as types from '../actions/types';

const initialState = {
  data: {},
  topic: 'all',
  fetching: false,
  error: null
};

function articlesReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.VOTE_ARTICLE_REQUEST:
    case types.FETCH_ARTICLES_REQUEST: {
      const newState = Object.assign({}, prevState);

      newState.fetching = true;
      return newState;
    }
    case types.FETCH_ARTICLES_SUCCESS: {
      const newState = Object.assign({}, prevState);

      newState.data = convertData(action.data);
      newState.fetching = false;
      newState.topic = action.topic || 'all';
      return newState;
    }
    case types.VOTE_ARTICLE_SUCCESS: {
      const newState = Object.assign({}, prevState);
      const newData = Object.assign({}, newState.data);

      let article = newData[action.article_id];

      if (action.vote === 'up') {
        article.votes++;
      } else if (action.vote === 'down') {
        article.votes--;
      }

      newState.data = newData;
      newState.fetching = false;
      return newState;
    }
    case types.VOTE_ARTICLE_ERROR:
    case types.FETCH_ARTICLES_ERROR: {
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

export default articlesReducer;
