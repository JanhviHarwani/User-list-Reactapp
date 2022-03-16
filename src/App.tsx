import UserlistCard from "./components/UI/UserlistCard";
import css from "./App.module.css";
import DetailsCard from "./components/User/DetailsCard";
import { useEffect, useState } from "react";
import UserType from "./Interfaces/UserType";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/userActionCreator";
import UserState from "./Interfaces/UserState";

function App() {
  const [hoveredState, setHoveredState] = useState(false);
  const [foundUser, setFoundUser] = useState<UserType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const userData = useSelector<UserState, UserState>((state) => state);

  const foundUserHandler = (gotUser: UserType) => {
    const hoveredUser = gotUser;
    setFoundUser(hoveredUser);
  };

  useEffect(() => {
    dispatch(fetchUser(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (userData.isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={css["container"]}>
      <UserlistCard
        currentpage={currentPage}
        setHoveredState={setHoveredState}
        hoveredUser={foundUserHandler}
        setCurrentPage={setCurrentPage}
      />

      {foundUser && hoveredState ? (
        <DetailsCard hoveredUserProfile={foundUser} />
      ) : null}
    </div>
  );
}

export default App;
