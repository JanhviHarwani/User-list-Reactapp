import UserlistCard from "./components/UI/UserlistCard";
import css from "./App.module.css";
import DetailsCard from "./components/User/DetailsCard";
import { useState } from "react";
const DUMMY_DATA = [
  {
    id: 1,
    pic: "https://randomuser.me/api/portraits/med/women/75.jpg",
    name: "Jana Strassman",
    email: "someemail@xyz.com",
    status: "Inactive",
    access: "Read",
  },
  {
    id: 2,
    pic: "https://randomuser.me/api/portraits/med/men/75.jpg",
    name: "Hanson Bowman",
    email: "someemail@xyz.com",
    status: "Inactive",
    access: "Read",
  },
  {
    id: 3,
    pic: "https://randomuser.me/api/portraits/med/men/85.jpg",
    name: "Jube Bowman",
    email: "someemail@xyz.com",
    status: "Inactive",
    access: "Read",
  },
  {
    id: 4,
    pic: "https://randomuser.me/api/portraits/med/men/97.jpg",
    name: "Stanley Reid",
    email: "stanley.reid@example.com",
    status: "Inactive",
    access: "Read",
  },
  {
    id: 5,
    pic: "https://randomuser.me/api/portraits/med/men/15.jpg",
    name: "Alfredo Suarez",
    email: "alfredo.suarez@example.com",
    status: "Inactive",
    access: "Read",
  },
  {
    id: 6,
    pic: "https://randomuser.me/api/portraits/med/men/43.jpg",
    name: "Stanley Reid",
    email: "stanley.reid@example.com",
    status: "Inactive",
    access: "Read",
  },
  {
    id: 7,
    pic: "https://randomuser.me/api/portraits/med/women/85.jpg",
    name: "Benedicte Heia",
    email: "benedicte.heia@example.com",
    status: "Inactive",
    access: "Read",
  },
  {
    id: 8,
    pic: "https://randomuser.me/api/portraits/med/women/55.jpg",
    name: "Mariam Hjelm",
    email: "mariam.hjelm@example.com",
    status: "Inactive",
    access: "Read",
  },
  {
    id: 9,
    pic: "https://randomuser.me/api/portraits/med/women/35.jpg",
    name: "Teresa Delgado",
    email: "teresa.delgado@example.com",
    status: "Inactive",
    access: "Read",
  },
];

function App() {
  const [hoveredState, setHoveredState] = useState(false);
  const [foundUser, setFoundUser] = useState([]);
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
        dummyData={DUMMY_DATA}
      />
      {hoveredState && <DetailsCard hoveredUserProfile={foundUser} />}

    </div>
  );
}

export default App;
