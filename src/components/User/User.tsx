import React, { useState } from "react";
import css from "./User.module.css";
import { Trash2 } from "react-feather";

interface Props {
  id:number;
  pic: string;
  name: string;
  email: string;
  hovered: (state: boolean) => void;
}

function User({ pic, name, email, hovered }: Props) {
  const [stateHovered, setStateHovered] = useState(false);
  const hoverHandler = () => {
    setStateHovered(true);

    hovered(stateHovered);
  };
  return (
    <div className={css["profile_wrapper"]}>
      <div className={css["profile-name-title"]}>
        <div onMouseOver={hoverHandler} className={css["profile-container"]}>
          <div className={css["profile-image"]}>
            <img
              alt="No img preview available"
              className={css["img-styling"]}
              height={50}
              width={50}
              src={pic}
            />
          </div>
          <div className={css["profile-name"]}>{name}</div>
          <div className={css["profile-email"]}>{email}</div>
        </div>
      </div>
      <div className={css["profile-name-status"]}>
        <select
          className={`${css["custom_style"]} form-select form-select-sm`}
          aria-label=".form-select-sm example"
        >
          <option value="1">Inactive</option>
          <option value="2">Active</option>
        </select>
      </div>
      <div className={css["profile-name-access"]}>
        <select
          className={`${css["custom_style"]} form-select form-select-sm`}
          aria-label=".form-select-sm example"
        >
          <option value="1">Manager</option>
          <option value="2">Something else</option>
        </select>
      </div>
      <div className={css["profile-name-remove"]}>
        <Trash2 style={{ cursor: "pointer" }} color="#c3c3c3" />
      </div>
    </div>
  );
}

export default User;
