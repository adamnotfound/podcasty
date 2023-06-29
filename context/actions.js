import AppContext from "../context/context";
import { reducer } from "../context/reducer";
import { useReducer } from "react";
import initialState from "./initialState";
import {
  FAIL_REQUEST,
  SET_EPISODES,
  SET_PODCASTS,
  START_REQUEST,
  SUCCESS_REQUEST,
} from "./types";

export default function AppState(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  async function searchData(word) {
    try {
      dispatch({ type: START_REQUEST });
      const resultsResponse = await fetch(
        `${process.env.API_URL}/search/${word}`
      );
      const response = await resultsResponse.json();
      console.log({ response });
      if (response) {
        dispatch({ type: SET_PODCASTS, payload: response.podcasts });
        dispatch({ type: SET_EPISODES, payload: response.episodes });
      }
      dispatch({ type: SUCCESS_REQUEST });
    } catch (err) {
      console.log(err);
      dispatch({ type: FAIL_REQUEST });
    }
  }

  let exportedState = {
    loading: state.loading,
    error: state.error,
    podcasts: state.podcasts,
    episodes: state.episodes,
    searchWord: state.searchWord,
    searchData,
  };

  return (
    <AppContext.Provider value={exportedState}>
      {props.children}
    </AppContext.Provider>
  );
}
