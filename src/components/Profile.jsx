import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

import imgBg from "../assets/background.jpg";
import Tweet from "./Tweet";
import Avatar from "./Avatar";

function Profile({ user }) {
  const { likes, content, createdAt, user } = tweet;
  const { imgBg } = headBg;
  const { firstname, lastname, username, avatar, bio, following, followers } = user;
  
}


  const trending = [
    {
      id: nanoid(),
      category: "Programming",
      tag: "MongoVsSequelize",
      tweets: "97.5K",
    },
    {
      id: nanoid(),
      category: "Entertainment",
      tag: "StarWars",
      tweets: "97.5K",
    },
    {
      id: nanoid(),
      category: "News",
      tag: "LifeInMars",
      tweets: "97.5K",
    },
];
  


const logos
  
  function Profile() {
    const tweets = useSelector((state) => state.tweets);
    const user = useSelector((state) => state.user);
    const [content, setContent] = useState("");
  
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
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="border-start border-end border-bottom border-secondary p-3">
                <p className="text-white fs-4">Home</p>
                <div className="d-flex pt-3 align-items-center">
                  <Avatar imageName={user.userData?.avatar} />
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
                    <Tweet tweet={tweet} />
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="col-4 d-none d-md-block trending align-self-start mt-4 p-3">
              <p className="fs-4 text-white">What’s happening</p>
              <ul className="list-unstyled">
                {trending.map((item) => (
                  <li key={item.id} className="mb-3">
                    <p className="text-secondary mb-0">{item.category} • Trending</p>
                    <p className="fw-bold text-white mb-0">#{item.tag}</p>
                    <p className="text-secondary mb-0">{item.tweets} Tweets</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  