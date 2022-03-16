import UserType from "../Interfaces/UserType";

export enum ActionType {
  FETCH_USER_REQ = "FETCH_USER_REQ",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
}

interface ActionPending {
  type: ActionType.FETCH_USER_REQ;
}

interface ActionSuccess {
  type: ActionType.FETCH_USER_SUCCESS;
  payload: UserType[];
}

interface ActionFail {
  type: ActionType.FETCH_USER_FAILURE;
  payload: string;
}

export type Action = ActionPending | ActionSuccess | ActionFail;
