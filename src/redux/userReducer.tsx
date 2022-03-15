import UserType from "../Interfaces/UserType";
import { Action, ActionType } from "./userActionTypes";

interface UserState {
  user: UserType[];
  error: string | null;
  isLoading: Boolean;
}
const initialValue = {
  user: [],
  error: null,
  isLoading: false,
};

export default function userReducer(
  state: UserState = initialValue,
  action: Action
): UserState {
  switch (action.type) {
    case ActionType.FETCH_USER_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.FETCH_USER_FAILURE: {
      return {
        error: action.payload,
        isLoading: false,
        user: [],
      };
    }
    case ActionType.FETCH_USER_SUCCESS: {
      return {
        user: action.payload,
        error: "",
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
