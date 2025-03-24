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
    <div className="app-container d-flex justify-content-center">
      <div className="sidebar d-flex flex-column p-3">
        <div className="mb-3">
          <Link
            to="#"
            className="d-flex justify-content-center justify-content-md-start align-items-center"
          >
            <i className="bi bi-twitter-x text-white fs-3 ms-1"></i>
          </Link>
        </div>

        <div className="mb-3">
          <Link
            to="/"
            className="text-white text-decoration-none d-flex justify-content-center justify-content-md-start align-items-center"
          >
            <i className="bi bi-house-door fs-2"></i>
            <span className="d-none d-md-inline ms-4">Home</span>
          </Link>
        </div>

        <div className="mb-3">
          <Link
            to={`/profile/${user.username}`}
            className="text-white text-decoration-none d-flex justify-content-center justify-content-md-start align-items-center"
          >
            <i className="bi bi-person fs-1"></i>
            <span className="d-none d-md-inline ms-3">Profile</span>
          </Link>
        </div>
        <div className="mb-4">
          <Link to="/" className="text-white mb-4 text-decoration-none">
            <Button
              variant="primary"
              className="rounded-pill d-none d-md-flex align-items-center justify-content-center d-flex w-100"
            >
              Tweet
            </Button>

            <Button
              variant="primary"
              className="rounded-circle d-md-none d-flex align-items-center justify-content-center"
              style={{ width: "60px", height: "60px" }}
            >
              <i
                className="bi bi-plus-lg position-relative"
                style={{ bottom: "5px", left: "2px" }}
              ></i>
              <i className="bi bi-feather fs-4"></i>
            </Button>
          </Link>
        </div>

        <div className="mb-3  btn-floating">
          <Button
            variant="danger"
            onClick={logout}
            className="d-none d-md-flex mt-auto rounded-pill d-flex align-items-center justify-content-center text-decoration-none w-100"
          >
            <span className="d-none d-md-inline">Logout</span>
          </Button>
        </div>

        <div className="mb-3 btn-floating">
          <Button
            variant="danger"
            onClick={logout}
            className="mt-auto rounded-pill d-flex align-items-center justify-content-center text-decoration-none d-md-none"
            style={{ width: "60px", height: "60px" }}
          >
            <i className="bi bi-box-arrow-right fs-3"></i>
          </Button>
        </div>
      </div>
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
