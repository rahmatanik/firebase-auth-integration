import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="text-3xl text-center">Welcome to Auth Integration</h2>
      <p className="text-xl text-center my-2">
        <Link to="/profile">
          <button className="btn btn-primary">Visit Your Profile</button>
        </Link>
      </p>
    </div>
  );
};

export default Home;
