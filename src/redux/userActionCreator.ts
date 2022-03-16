import axios from "axios";
import { Dispatch } from "redux";
import { Action, ActionType } from "./userActionTypes";

export function fetchUser(currentPage: number) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_USER_REQ,
    });
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .then((response) => {
        const user = response.data.data;
        dispatch({
          type: ActionType.FETCH_USER_SUCCESS,
          payload: user,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;

        dispatch({
          type: ActionType.FETCH_USER_FAILURE,
          payload: errorMessage,
        });
      });
  };
}
