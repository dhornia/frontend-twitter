import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import { toggleLike } from "../redux/tweetsSlice";

function LikeButton({ tweetId, likesQty }) {
  const tweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.user);
  const userId = user.id;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isProfilePath = pathname.includes("profile");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const isLiked = tweets
    .find((tweet) => tweet._id.toString() === tweetId)
    ?.likes.some((uId) => uId.toString() === userId);

  const handleLike = async () => {
    if (isProfilePath) return;
    dispatch(toggleLike({ tweetId, userId }));

    try {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/tweets/${tweetId}/likes`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
        data: {
          userId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveTweet = async () => {
    try {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/tweets/${tweetId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      navigate(`/profile/${user.username}}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <i
            className={`${!isProfilePath && "pointer"} bi ${
              isLiked || isProfilePath ? "bi-heart-fill custom-color" : "bi-heart text-secondary"
            } me-2`}
            onClick={handleLike}
          ></i>
          <span className={`${isLiked || isProfilePath ? "custom-color" : "text-secondary"}`}>
            {likesQty}
          </span>
        </div>
        {isProfilePath && (
          <div>
            <i className="bi bi-trash3-fill text-danger pointer" onClick={handleRemoveTweet}></i>
          </div>
        )}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que deseas eliminar este tweet?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleRemoveTweet}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LikeButton;
