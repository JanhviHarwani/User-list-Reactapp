import UserType from "./UserType";
export default interface UserState {
  user: UserType[];
  error: string;
  isLoading: Boolean;
}
