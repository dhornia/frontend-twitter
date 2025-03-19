import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Tweet from "./Tweet";
import useUser from "../hooks/useUser";
import Avatar from "./Avatar";

function Home() {
  const tweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.user);
  const [content, setContent] = useState("");
  const { avatar } = useUser();

  const handlePostTweet = async (e) => {
    e.preventDefault();

    try {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/tweets`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.accessToken}}`,
        },
        data: {
          content,
          author: user.id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="section-home bg-dark">
      <div className="border-start border-end border-bottom border-secondary p-3">
        <p className="text-white fs-4">Home</p>
        <div className="d-flex pt-3 align-items-center">
          <Avatar imageName={avatar} />
          <p className="fs-4 text-secondary mb-0">What's happening?</p>
        </div>
        <form action="" onSubmit={handlePostTweet} className="d-flex flex-column">
          <div className="mb-3 d-flex pt-3">
            <label htmlFor="content" className="form-label" hidden>
              Post content
            </label>
            <textarea
              id="content"
              name="content"
              rows="1"
              className="form-control bg-transparent w-100 text-white border-0 d-flex"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button
            className="badge rounded-pill ms-auto bg-primary border-0 fs-6"
            style={{ padding: ".8rem" }}
          >
            Tweet
          </button>
        </form>
      </div>

      <ul className="p-0 list-unstyled">
        {tweets.map((tweet) => (
          <li key={tweet._id}>
            <Tweet
              firstname={tweet.user.firstname}
              lastname={tweet.user.lastname}
              username={tweet.user.username}
              likes={tweet.likes.length}
              content={tweet.content}
              avatar={tweet.user.avatar}
              createdAt={tweet.createdAt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
