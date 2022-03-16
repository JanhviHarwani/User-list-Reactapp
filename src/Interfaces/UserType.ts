export default interface UserType {

  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  status?: string;
  access?: string;
}
export interface User{
  user:UserType[];
}
