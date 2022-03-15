import css from "./User.module.css";
import { Trash2, Lock } from "react-feather";
import UserType from "../../Interfaces/UserType";

interface Props {
  user: UserType;
  findUser: (user: UserType) => void;
  setHoveredState: (hover: boolean) => void;
}

function User({ findUser, setHoveredState, user }: Props) {
  const mouseLeaveHandler = () => {
    setHoveredState(false);
  };

  const hoverHandlerFindUser = (user: UserType) => {
    if (user) {
      setHoveredState(true);
      findUser(user);
      return { ...user };
    } else {
      setHoveredState(false);
      return null;
    }
  };

  return (
    <div className={css["profile_wrapper"]}>
      <div className={css["profile-name-title"]}>
        <div
          onMouseEnter={() => {
            hoverHandlerFindUser(user);
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
              src={user.avatar}
            />
          </div>
          <div className={css["profile-name"]}>
            {user.first_name} {user.last_name}
          </div>
          <div className={css["profile-email"]}>{user.email}</div>
        </div>
      </div>
      {user.id === 1 ? (
        <>
          {" "}
          <div className={css["profile-name-status-owner"]}>Active</div>
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
