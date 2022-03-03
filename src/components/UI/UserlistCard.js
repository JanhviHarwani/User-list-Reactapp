import React from "react";
import User from "../User/User";
import UserOwner from "../User/UserOwner";
import CardTitle from "./CardTitle";
import css from "./UserlistCard.module.css";
import { v4 as uuidv4 } from "uuid";

function UserlistCard({ dummyData }) {
  return (
    <div className={css["user_list_card"]}>
      <CardTitle />
      <UserOwner />

      {dummyData.map((obj) => (
        <User key={uuidv4()} pic={obj.pic} name={obj.name} email={obj.email} />
      ))}
    </div>
  );
}

export default UserlistCard;
