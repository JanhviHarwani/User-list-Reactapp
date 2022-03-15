import UserType from "../Interfaces/UserType";

export enum ActionType {
  FETCH_USER_REQ = "FETCH_USER_REQ",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
}

interface actionPending {
  type: ActionType.FETCH_USER_REQ;
}

interface actionSuccess {
  type: ActionType.FETCH_USER_SUCCESS;
  payload: UserType[];
}

interface actionFail {
  type: ActionType.FETCH_USER_FAILURE;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
