import React from "react";
import css from "./CardTitle.module.css";

function CardTitle() {
  return (
    <div className={css["card_title"]}>
      <div className={css["user-name-title"]}>Name</div>
      <div className={css["user-status-title"]}>Status</div>
      <div className={css["user-access-title"]}>Access</div>
    </div>
  );
}

export default CardTitle;
