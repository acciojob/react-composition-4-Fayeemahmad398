import React from "react";
import { useState } from "react";
const MyForm = (props) => {
  const [information, setInformation] = useState({});
  // console.log(props.arr[1].name);

  const handleSubmit = () => {
    if (information.name && information.email && information.password) {
      console.log(information);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="">{props.arr[0].name}</label>
      <input
        type={props.arr[0].type}
        onChange={(event) => {
          setInformation({ ...information, name: event.target.value });
        }}
      />
      <label htmlFor="">{props.arr[1].name}</label>
      <input
        type={props.arr[1].type}
        onChange={(event) => {
          setInformation({ ...information, email: event.target.value });
        }}
      />
      <label htmlFor="">{props.arr[2].name}</label>
      <input
        type={props.arr[2].type}
        onChange={(event) => {
          setInformation({ ...information, password: event.target.value });
        }}
      />
      <button>Submit</button>
    </form>
  );
};
export default MyForm;
