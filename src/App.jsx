import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/add-user" Component={AddUser} />
        <Route path="/edit-user/:id" Component={EditUser} />
      </Routes>
    </>
  );
};

export default App;
