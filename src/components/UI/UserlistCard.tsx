import User from "../User/User";
import CardTitle from "./CardTitle";
import css from "./UserlistCard.module.css";
import UserType from "../../Interfaces/UserType";
import UserState from "../../Interfaces/UserType";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

interface dummyDataProps {
  hoveredUser: (user: UserType) => void;
  setHoveredState: (hover: boolean) => void;
  setCurrentPage: (page: number) => void;
}

const UserlistCard = ({
  setHoveredState,
  hoveredUser,
  setCurrentPage,
}: dummyDataProps) => {
  const foundUserHandler = (foundUser: UserType) => {
    const gotUser = foundUser;
    hoveredUser(gotUser);
  };

  const userData = useSelector<UserState, UserState>((state) => state);
  const paginate = (pageNumber: number) => {
    const current = pageNumber;

    setCurrentPage(current);
  };
  return (
    <div className={css["user_list_card"]}>
      <CardTitle />
      {userData.user.map((obj: UserType) => (
        <User
          findUser={foundUserHandler}
          setHoveredState={setHoveredState}
          key={obj.id}
          user={obj}
        />
      ))}
      <Pagination paginate={paginate} />
    </div>
  );
};

export default UserlistCard;
