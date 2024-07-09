import { Link } from "react-router-dom";
import Table from "../components/Table";

const Home = () => {
  return (
    <>
      <div className="container">
        <Link to="/add-user">
          <button>Add-user +</button>
        </Link>
        <div className="row">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Home;
