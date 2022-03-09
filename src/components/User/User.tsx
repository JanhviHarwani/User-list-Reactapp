import { useState } from "react";
import css from "./User.module.css";
import { Trash2, Lock } from "react-feather";
import UserType from "../../Interfaces/UserType";

interface Props {
  id: number;
  pic: string;
  name: string;
  email: string;
  status: string;
  hovered: (state: boolean) => void;
  data: { id: number; pic: string; name: string; email: string }[];
  findUser: (user: UserType) => void;
}

function User({
  status,
  findUser,
  data,
  id,
  pic,
  name,
  email,
  hovered,
}: Props) {
  const [stateHovered, setStateHovered] = useState(false);

  const mouseLeaveHandler = () => {
    setStateHovered(false);
    hovered(stateHovered);
    console.log(stateHovered);
  };

  const hoverHandler = (id: number) => {
    const foundUser = data.find((obj: any) => {
      if (obj.id === id) {
        setStateHovered(true);
        return { ...obj };
      } else {
        setStateHovered(false);
        return null;
      }
    });
    findUser(foundUser!);
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
      {id === 0 ? (
        <>
          {" "}
          <div className={css["profile-name-status-owner"]}>{status}</div>
          <div className={css["profile-name-access-owner"]}>Owner</div>
          <div className={css["profile-name-remove"]}>
            <Lock style={{ cursor: "pointer" }} color="#c3c3c3" />
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default User;
