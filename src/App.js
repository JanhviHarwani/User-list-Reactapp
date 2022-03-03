import React from "react";
import UserlistCard from "./components/UI/UserlistCard";
import css from "./App.module.css";
const DUMMY_DATA = [
  {
    id:1,
    pic: "https://randomuser.me/api/portraits/med/women/75.jpg",
    name: "Jana Strassman",
    email: "someemail@xyz.com",
  },
  {
    id:2,
    pic: "https://randomuser.me/api/portraits/med/men/75.jpg",
    name: "Hanson Bowman",
    email: "someemail@xyz.com",
  },
  {
    id:3,
    pic: "https://randomuser.me/api/portraits/med/men/85.jpg",
    name: "Jube Bowman",
    email: "someemail@xyz.com",
  },
  {
    id:4,
    pic: "https://randomuser.me/api/portraits/med/men/97.jpg",
    name: "Stanley Reid",
    email: "stanley.reid@example.com",
  },
  {
    id:5,
    pic: "https://randomuser.me/api/portraits/med/men/15.jpg",
    name: "Alfredo Suarez",
    email: "alfredo.suarez@example.com",
  },
  {
    id:6,
    pic: "https://randomuser.me/api/portraits/med/men/43.jpg",
    name: "Stanley Reid",
    email: "stanley.reid@example.com",
  },
  {
    id:7,
    pic: "https://randomuser.me/api/portraits/med/women/85.jpg",
    name: "Benedicte Heia",
    email: "benedicte.heia@example.com",
  },
  {
    id:8,
    pic: "https://randomuser.me/api/portraits/med/women/55.jpg",
    name: "Mariam Hjelm",
    email: "mariam.hjelm@example.com",
  },
  {
    id:9,
    pic: "https://randomuser.me/api/portraits/med/women/35.jpg",
    name: "Teresa Delgado",
    email: "teresa.delgado@example.com",
  }
];
function App() {
  return (
    <div className={css["container"]}>
      <UserlistCard dummyData={DUMMY_DATA} />
    </div>
  );
}

export default App;
