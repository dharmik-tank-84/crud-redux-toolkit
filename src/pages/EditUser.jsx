import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux-toolkit/slice/slice";

const EditUser = () => {
  const { id } = useParams();

  const user = useSelector((state) => state.users);

  const existingUser = user.filter((f) => f.id == id);

  const { name, email } = existingUser[0];

  const [updateName, setUpdateName] = useState(name);

  const [updateEmail, setUpdateEmail] = useState(email);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(
      updateUser({
        id: id,
        name: updateName,
        email: updateEmail,
      })
    );
    navigate("/");
    setUpdateName("");
    setUpdateEmail("");
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
          value={updateName}
          onChange={(e) => setUpdateName(e.target.value)}
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
          value={updateEmail}
          onChange={(e) => setUpdateEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default EditUser;
