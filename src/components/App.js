import React from "react";
import "./../styles/App.css";
import MyForm from "./MyForm";
const App = () => {
  const arr = [
    { name: "Name", type: "text" },
    { name: "email", type: "email" },
    { name: "password", type: "password" },
  ];
  return <MyForm arr={arr} />;
};

export default App;
