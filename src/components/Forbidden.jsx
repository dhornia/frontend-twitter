import React from "react";
import { Link } from "react-router-dom";

const Forbidden = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="text-center">
        <h1 className="display-4">403 - Forbidden</h1>
        <p className="lead">You do not have permission to access this page.</p>
        <Link to="/" className="btn btn-primary">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
