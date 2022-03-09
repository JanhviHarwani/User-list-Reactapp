import UserlistCard from "./components/UI/UserlistCard";
import css from "./App.module.css";
import DetailsCard from "./components/User/DetailsCard";
import { useState } from "react";
import UserType from "./Interfaces/UserType";
import { USERS } from "./dummyData/USER";

function App() {
  const [hoveredState, setHoveredState] = useState(false);
  const [foundUser, setFoundUser] = useState<UserType | null>(null);
  const hoverStateHandler = (state: boolean) => {
    setHoveredState(state);
  };
  const foundUserHandler = (gotUser: any) => {
    const hoveredUser = gotUser;
    setFoundUser(hoveredUser);
  };

  return (
    <div className={css["container"]}>
      <UserlistCard
        hoveredUser={foundUserHandler}
        currHoveredState={hoverStateHandler}
        dummyUserData={USERS}
      />
      {hoveredState && <DetailsCard hoveredUserProfile={foundUser} />}
    </div>
  );
}

export default App;
