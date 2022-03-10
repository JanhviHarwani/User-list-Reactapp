import User from "../User/User";
import CardTitle from "./CardTitle";
import css from "./UserlistCard.module.css";
import UserType from "../../Interfaces/UserType";

interface dummyDataProps {
  dummyUserData: {
    id: number;
    pic: string;
    name: string;
    email: string;
    status: string;
  }[];

  hoveredUser: (user: UserType) => void;
  setHoveredState:(hover: boolean) => void;
}

const UserlistCard = ({
  dummyUserData,
  setHoveredState,
  hoveredUser,
}: dummyDataProps) => {
  const foundUserHandler = (foundUser: UserType) => {
    const gotUser = foundUser;
    hoveredUser(gotUser);
  };

  return (
    <div className={css["user_list_card"]}>
      <CardTitle />
      {dummyUserData.map((obj) => (
        <User
          findUser={foundUserHandler}
          setHoveredState={setHoveredState}
          key={obj.id}
          user={obj}
        />
      ))}
    </div>
  );
};

export default UserlistCard;
