import {
  START_REQUEST,
  SUCCESS_REQUEST,
  FAIL_REQUEST,
  SET_EPISODES,
  SET_PODCASTS,
} from "./types";

export function reducer(state, action) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESS_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };
    case SET_PODCASTS:
      return {
        ...state,
        podcasts: action.payload,
      };
    default:
      return state;
  }
}
