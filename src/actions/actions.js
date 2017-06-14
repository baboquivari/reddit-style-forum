import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';

export function goFetchArticles (topic) {
  return (dispatch) => {
    let URL = `${ROOT}/articles`;

    if (topic && topic !== 'home') {
      URL = `${ROOT}/topics/${topic}/articles`;
    }
    // if we're routing to a new topic, we set our URL for the get request to point us to a different part of the API, a part that returns all the articles JUST for a certain topic. NB: This is where I was going wrong before, I assumed that you just fetch ALL THE ARTICLES at the start, and then filter through those articles to grab the specific ones needed for a topic. WRONG. We're doing a brand new fetch request every time a user selects a new TOPIC in the NavBar.
    // IN ESSENCE, this action creator function is setup to hit 2 DIFFERENT API ENDPOINTS (all articles or some articles) depending on what's coming in via it's 'topic' argument.

    dispatch(fetchArticlesRequest());
    axios
      .get(URL)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles, topic));
      })
      .catch(error => {
        dispatch(fetchArticlesError(error));
      });
  };
}
export function fetchArticlesSuccess (articles, topic) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: articles,
    topic: topic
  };
}
export function fetchArticlesError (error) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    error: error
  };
}
export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}


export function goFetchTopics () {
  return (dispatch) => {
    dispatch(fetchTopicsRequest());
    axios
      .get(`${ROOT}/topics`)
      .then(res => {
        dispatch(fetchTopicsSuccess(res.data.topics));
      })
      .catch(error => {
        dispatch(fetchTopicsError(error));
      });
  };
}
export function fetchTopicsSuccess (topics) {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    data: topics
  };
}
export function fetchTopicsError (error) {
  return {
    type: types.FETCH_TOPICS_ERROR,
    error: error
  };
}
export function fetchTopicsRequest () {
  return {
    type: types.FETCH_TOPICS_REQUEST
  };
}


export function fetchComments (article_id) {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    axios
      .get(`${ROOT}/articles/${article_id}/comments`)
      .then(res => {
        dispatch(fetchCommentsSuccess(res.data.comments));
      })
      .catch(error => {
        dispatch(fetchCommentsError(error));
      });
  };
}
export function fetchCommentsRequest () {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
}
export function fetchCommentsSuccess (comments) {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    data: comments
  };
}
export function fetchCommentsError (error) {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    error: error
  };
}


export function voteArticle (article_id, vote) {
  return (dispatch) => {
    dispatch(voteArticleRequest());
    axios
      .put(`${ROOT}/articles/${article_id}?vote=${vote}`)
      .then(res => {
        dispatch(voteArticleSuccess(article_id, vote));
        // returns the same article object, just with the votes property modified
      })
      .catch(error => {
        dispatch(voteArticleError(error));
      });
  };
}
export function voteArticleRequest () {
  return {
    type: types.VOTE_ARTICLE_REQUEST
  };
}
export function voteArticleSuccess (article_id, vote) {
  return {
    type: types.VOTE_ARTICLE_SUCCESS,
    article_id: article_id,
    vote: vote
  };
}
export function voteArticleError (error) {
  return {
    type: types.VOTE_ARTICLE_ERROR,
    error: error
  };
}


export function voteComment (comment_id, vote) {
  return (dispatch) => {
    dispatch(voteCommentRequest());
    axios
      .put(`${ROOT}/comments/${comment_id}?vote=${vote}`)
      .then(() => {
        dispatch(voteCommentSuccess(comment_id, vote));
      })
      .catch(error => {
        dispatch(voteCommentError(error));
      });
  };
}
export function voteCommentRequest () {
  return {
    type: types.VOTE_COMMENT_REQUEST
  };
}
export function voteCommentSuccess (comment_id, vote) {
  return {
    type: types.VOTE_COMMENT_SUCCESS,
    comment_id: comment_id,
    vote: vote
  };
}
export function voteCommentError (error) {
  return {
    type: types.VOTE_COMMENT_ERROR,
    error: error
  };
}


export function addComment (article_id, comment) {
  return (dispatch) => {
    dispatch(addCommentRequest());
    axios
      .post(`${ROOT}/articles/${article_id}/comments`, {comment: comment})
      .then(res => {
        dispatch(addCommentSuccess(res.data.comment));
      })
      .catch(error => {
        dispatch(addCommentError(error));
      });
  };
}
export function addCommentRequest () {
  return {
    type: types.ADD_COMMENT_REQUEST
  };
}
export function addCommentSuccess (comment) {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    comment: comment
  };
}
export function addCommentError (error) {
  return {
    type: types.ADD_COMMENT_ERROR,
    error: error
  };
}



export function deleteComment (comment_id) {
  return (dispatch) => {
    dispatch(deleteCommentRequest());
    axios
      .delete(`${ROOT}/comments/${comment_id}`)
      .then(res => {
        if (res.status === '404') {
          throw Error(res.body);
        }
        dispatch(deleteCommentSuccess(comment_id));
      })
      .catch(error => {
        dispatch(deleteCommentError(error));
      });
  };
}
export function deleteCommentRequest () {
  return {
    type: types.DELETE_COMMENT_REQUEST
  };
}
export function deleteCommentSuccess (comment_id) {
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    comment_id: comment_id
  };
}
export function deleteCommentError (error) {
  return {
    type: types.DELETE_COMMENT_ERROR,
    error: error
  };
}


export function fetchUsers () {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(`${ROOT}/users`)
      .then(res => {
        dispatch(fetchUsersSuccess(res.data.users));
      })
      .catch(error => {
        dispatch(fetchUsersError(error));
      });
  };
}
export function fetchUsersRequest () {
  return {
    type: types.FETCH_USERS_REQUEST
  };
}
export function fetchUsersSuccess (users) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    data: users
  };
}
export function fetchUsersError (error) {
  return {
    type: types.FETCH_USERS_ERROR,
    error: error
  };
}

