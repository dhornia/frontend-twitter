import React from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { removeUser } from "../redux/userSlice";

function Layout() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
  };

  return (
    <div className="app-container d-flex">
      <div className="sidebar d-flex flex-column align-items-center p-3">
        <Link to="#" className=" align-self-start mb-4">
          <i className="bi bi-twitter-x text-white fs-2"></i>
        </Link>

        <Link to="/" className="text-white mb-4 d-flex align-items-center text-decoration-none">
          <i className="bi bi-house-door fs-2 me-3"></i>
          <span className="d-none d-md-inline">Home</span>
        </Link>

        <Link
          to={`/profile/${user.username}`}
          className="text-white mb-4 d-flex align-items-center text-decoration-none"
        >
          <i className="bi bi-person fs-2 me-3"></i>
          <span className="d-none d-md-inline">Profile</span>
        </Link>
        <Link to="/" className="text-white mb-4 text-decoration-none w-100">
          <Button
            variant="primary"
            className="rounded-pill d-none d-md-flex align-items-center justify-content-center"
          >
            Tweet
          </Button>

          <Button
            variant="primary"
            className="rounded-circle d-md-none d-flex align-items-center justify-content-center"
          >
            <i
              className="bi bi-plus-lg position-relative"
              style={{ bottom: "5px", left: "2px" }}
            ></i>
            <i className="bi bi-feather fs-4"></i>
          </Button>
        </Link>

        <Button
          variant="danger"
          onClick={logout}
          className="d-none d-md-flex mt-auto rounded-pill d-flex align-items-center justify-content-center text-decoration-none w-100"
        >
          <span className="d-none d-md-inline">Logout</span>
        </Button>

        <Button
          variant="danger"
          onClick={logout}
          className="mt-auto rounded-pill d-flex align-items-center justify-content-center text-decoration-none d-md-none"
        >
          <i className="bi bi-box-arrow-right fs-3"></i>
        </Button>
      </div>
      <div className="content-area flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
