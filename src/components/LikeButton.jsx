import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { toggleLike } from "../redux/tweetsSlice";

function LikeButton({ tweetId, likesQty }) {
  const tweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.user);
  const userId = user.id;
  const dispatch = useDispatch();

  const isLiked = tweets
    .find((tweet) => tweet._id.toString() === tweetId)
    ?.likes.some((uId) => uId.toString() === userId);

  const handleLike = async () => {
    dispatch(toggleLike({ tweetId, userId }));

    try {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/tweets`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${user.accessToken}}`,
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
    <div>
      <i
        className={`bi ${isLiked ? "bi-heart-fill custom-color" : "bi-heart text-secondary"} me-2`}
        onClick={handleLike}
      ></i>
      <span className={`${isLiked ? "custom-color" : "text-secondary"}`}>{likesQty}</span>
    </div>
  );
}

export default LikeButton;
