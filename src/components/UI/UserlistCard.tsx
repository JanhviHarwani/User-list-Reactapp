import React, { useState } from "react";
import User from "../User/User";
import UserOwner from "../User/UserOwner";
import CardTitle from "./CardTitle";
import css from "./UserlistCard.module.css";
// import { v4 as uuidv4 } from "uuid";

interface dummyDataProps {
  dummyData: { id: number; pic: string; name: string; email: string }[];
}

const UserlistCard = ({ dummyData }: dummyDataProps) => {
  const [hoverState,setHoverState]=useState(false)
  const hoverHandler=(hoveredState:boolean)=>{
    setHoverState(hoveredState)
    console.log("hovered,state")
  }
  return (
    <div className={css["user_list_card"]}>
      <CardTitle />
      <UserOwner />

      {dummyData.map((obj) => (
        <User hovered={hoverHandler} key={obj.id} pic={obj.pic} name={obj.name} email={obj.email} />
      ))}
    </div>
  );
};

export default UserlistCard;
