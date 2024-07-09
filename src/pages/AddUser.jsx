import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux-toolkit/slice/slice";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const AddUser = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(
      addUser({
        id: nanoid(),
        name: name,
        email: email,
      })
    );
    navigate("/");
    setName("");
    setEmail("");
  };

  return (
    <>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="enter your name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter your email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default AddUser;
