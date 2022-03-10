import UserlistCard from "./components/UI/UserlistCard";
import css from "./App.module.css";
import DetailsCard from "./components/User/DetailsCard";
import { useState } from "react";
import UserType from "./Interfaces/UserType";
import { USERS } from "./dummyData/USER";

function App() {
  const [hoveredState, setHoveredState] = useState(false);
  const [foundUser, setFoundUser] = useState<UserType | null>(null);
  const foundUserHandler = (gotUser: UserType) => {
    const hoveredUser = gotUser;
    setFoundUser(hoveredUser);
  };

  return (
    <div className={css["container"]}>
      <UserlistCard
        setHoveredState={setHoveredState}
        hoveredUser={foundUserHandler}
        dummyUserData={USERS}
      />
      {foundUser && hoveredState ? (
        <DetailsCard hoveredUserProfile={foundUser} />
      ) : null}
    </div>
  );
}

export default App;
