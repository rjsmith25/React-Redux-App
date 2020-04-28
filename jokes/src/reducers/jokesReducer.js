import { jokesAction } from "../actions";

const {
  FETCH_JOKES_START,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE
} = jokesAction;

const initialState = {
  jokes: [],
  isloading: false,
  error: null
};

function jokesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOKES_START:
      return {
        ...state,
        isloading: true,
        error: null
      };
    case FETCH_JOKES_SUCCESS:
      return {
        ...state,
        jokes: action.payload,
        isloading: false,
        error: null
      };
    case FETCH_JOKES_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default jokesReducer;
