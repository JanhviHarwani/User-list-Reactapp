import React,{ useState } from "react";
import css from "./User.module.css";
import { Trash2 } from "react-feather";

interface Props {
  id: number;
  pic: string;
  name: string;
  email: string;
  hovered: (state: boolean) => void;
  data: any;
  findUser: any;

}

function User({ findUser, data, id, pic, name, email, hovered }: Props) {

  const [stateHovered, setStateHovered] = useState(false);
 

  const mouseLeaveHandler = () => {
    setStateHovered(false);
    hovered(stateHovered);
    console.log(stateHovered);
  };

  const hoverHandler = (id: any) => {
    const foundUser = data.find((obj: any) => {
      if (obj.id === id) {
        setStateHovered(true);
        return { ...obj };
      } else {
        setStateHovered(false);
        return null;
      }
    });
    findUser(foundUser);
    hovered(stateHovered);
  };

  return (
    <div className={css["profile_wrapper"]}>
      <div className={css["profile-name-title"]}>
        <div
          onMouseEnter={() => {
            hoverHandler(id);
          }}
          onMouseLeave={mouseLeaveHandler}
          className={css["profile-container"]}
        >
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
          <option value="Inactive">Inactive</option>
          <option value="Active">Active</option>
        </select>
      </div>
      <div className={css["profile-name-access"]}>
        <select
          className={`${css["custom_style"]} form-select form-select-sm`}
          aria-label=".form-select-sm example"
        >
          <option value="Manager">Manager</option>
          <option value="Owner">Owner</option>
          <option value="Read">Read</option>
        </select>
      </div>
      <div className={css["profile-name-remove"]}>
        <Trash2 style={{ cursor: "pointer" }} color="#c3c3c3" />
      </div>
    </div>
  );
}

export default User;
