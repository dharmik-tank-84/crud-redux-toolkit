import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux-toolkit/slice/slice";

const Table = () => {
  const user = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>
                  <Link to={`/edit-user/${users.id}`}>
                    <button>edit</button>
                  </Link>
                  <button onClick={() => handleDelete(users.id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
