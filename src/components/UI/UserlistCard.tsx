import { useState } from "react";
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
  currHoveredState: (state: boolean) => void;
  hoveredUser: (user: UserType) => void;
}

const UserlistCard = ({
  dummyUserData,
  currHoveredState,
  hoveredUser,
}: dummyDataProps) => {
  const [hoverState, setHoverState] = useState(false);
  const hoverHandler = (hoveredState: boolean) => {
    setHoverState(hoveredState);
    currHoveredState(hoverState);
  };
  const foundUserHandler = (foundUser: any) => {
    const gotUser = foundUser;
    hoveredUser(gotUser);
  };

  return (
    <div className={css["user_list_card"]}>
      <CardTitle />
      {dummyUserData.map((obj) => (
        <User
          findUser={foundUserHandler}
          data={dummyUserData}
          hovered={hoverHandler}
          id={obj.id}
          key={obj.id}
          pic={obj.pic}
          name={obj.name}
          email={obj.email}
          status={obj.status}
        />
      ))}
    </div>
  );
};

export default UserlistCard;
