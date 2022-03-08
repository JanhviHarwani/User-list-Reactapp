import React, { useState } from "react";
import User from "../User/User";
import UserOwner from "../User/UserOwner";
import CardTitle from "./CardTitle";
import css from "./UserlistCard.module.css";
// import { v4 as uuidv4 } from "uuid";

interface dummyDataProps {
  dummyData: { id: number; pic: string; name: string; email: string }[];
  currHoveredState: (state: boolean) => void;
  hoveredUser: any;
  
}

const UserlistCard = ({
  dummyData,
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
      <UserOwner />

      {dummyData.map((obj) => (
        <User
          findUser={foundUserHandler}
          data={dummyData}
          hovered={hoverHandler}
          id={obj.id}
          key={obj.id}
          pic={obj.pic}
          name={obj.name}
          email={obj.email}
        />
      ))}
    </div>
  );
};

export default UserlistCard;
