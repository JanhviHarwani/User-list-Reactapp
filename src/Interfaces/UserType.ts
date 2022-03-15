export default interface UserType {
  user: UserType[];
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  status?: string;
  access?: string;
}
