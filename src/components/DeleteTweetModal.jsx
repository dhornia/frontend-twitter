import React from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function DeleteTweetModal({ showModal, setShowModal, tweetId }) {
  const user = useSelector((state) => state.user);
  const handleClose = () => setShowModal(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleRemoveTweet = async () => {
    try {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/tweets/${tweetId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setShowModal(false);
      navigate(pathname);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal data-bs-theme="dark" show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this tweet?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleRemoveTweet}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteTweetModal;
