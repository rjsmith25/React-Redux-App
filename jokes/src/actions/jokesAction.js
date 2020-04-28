import axios from "axios";
const FETCH_JOKES_START = "FETCH_JOKES_START";
const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";

function getJokes() {
  return dispatch => {
    dispatch({ type: FETCH_JOKES_START });
    axios
      .get("https://official-joke-api.appspot.com/random_ten")
      .then(res => {
        dispatch({ type: FETCH_JOKES_SUCCESS, payload: res.data });
      })
      .catch(res => {
        dispatch({
          type: FETCH_JOKES_FAILURE,
          payload: "Unable to get jokes data"
        });
      });
  };
}

export {
  getJokes,
  FETCH_JOKES_START,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE
};
