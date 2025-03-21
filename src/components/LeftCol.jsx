import React from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faUser, faRightFromBracket, faFeather } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { removeUser } from "../redux/userSlice";

function LeftCol() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeUser());
  };
  return (
    <Col xs={3} className="sticky-sm-top p-3 d-flex flex-column full-height">
      <div className="mb-3">
        <FontAwesomeIcon className="d-block mb-3" icon={faXTwitter} size="3x" color="white" />
      </div>
      <Link to="/">
        <div className="mb-3">
          <FontAwesomeIcon icon={faHouse} size="2x" color="white" />
          <h2 className="text-white d-none d-lg-inline m-3">Home</h2>
        </div>
      </Link>
      <Link to="/profile">
        <div className="mb-3">
          <FontAwesomeIcon className="d-inline" icon={faUser} size="2x" color="white" />
          <h2 className="text-white d-none d-lg-inline m-3">Profile</h2>
        </div>
      </Link>
      <div className="d-grid ">
        <Link to="/">
          <Button variant="primary">
            <FontAwesomeIcon icon={faFeather} className="d-lg-none" />
            <span className="d-none d-lg-inline">Tweet</span>
          </Button>
        </Link>
      </div>
      <div className="d-grid mt-auto">
        <Button variant="danger" onClick={logout}>
          <FontAwesomeIcon icon={faRightFromBracket} className="d-lg-none" />
          <span className="d-none d-lg-inline">Logout</span>
        </Button>
      </div>
    </Col>
  );
}

export default LeftCol;
