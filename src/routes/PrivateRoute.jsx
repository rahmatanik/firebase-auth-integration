import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
