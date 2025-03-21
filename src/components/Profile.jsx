import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Tweet from "./Tweet";
import Avatar from "./Avatar";
import Trending from "./Trending";
import { setTweets } from "../redux/tweetsSlice";

function Home() {
  const tweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.user);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const getTweets = async () => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/tweets`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      dispatch(setTweets(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostTweet = async (e) => {
    e.preventDefault();

    try {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/tweets`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
        data: {
          content,
          user: user.id,
        },
      });
    } catch (err) {
      console.log(err);
    }

    setContent("");
    getTweets();
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="border-blue p-3">
              <p className="text-white fs-4">Home</p>
              <form action="" onSubmit={handlePostTweet} className="d-flex flex-column">
                <div className="d-flex pt-3 align-items-center">
                  <div className="me-3">
                    <Avatar imageName={user.avatar} />
                  </div>
                  <label htmlFor="content" className="fs-4 text-secondary mb-0">
                    What's happening?
                  </label>
                </div>
                <div className="mb-3 d-flex pt-3">
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
                  <Tweet tweet={tweet} />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-4 d-none d-md-block">
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
