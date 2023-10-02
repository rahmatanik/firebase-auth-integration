import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-2xl mx-auto h-screen mt-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
