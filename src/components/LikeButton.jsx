import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { toggleLike } from "../redux/tweetsSlice";
import DeleteTweetModal from "./DeleteTweetModal";

function LikeButton({ tweetId, likesQty }) {
  const tweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.user);
  const userId = user.id;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isProfilePath = pathname.includes("profile");
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
          <>
            <div>
              <i
                className="bi bi-trash3-fill text-danger pointer"
                onClick={() => setShowModal(true)}
              ></i>
            </div>
          </>
        )}
        <DeleteTweetModal tweetId={tweetId} showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default LikeButton;
