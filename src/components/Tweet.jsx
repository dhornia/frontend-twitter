import React from "react";

import Avatar from "./Avatar";
import LikeButton from "./LikeButton";

function Tweet({ tweet, author }) {
  const { _id, content, createdAt, likes } = tweet;
  const { firstname, lastname, username, avatar } = author;

  return (
    tweet &&
    author && (
      <div className="p-3 d-flex gap-3 border-blue">
        <Avatar imageName={avatar} />
        <div className="text-container flex-grow-1">
          <p className="text-white fw-semibold mb-0">
            {firstname} {lastname} &nbsp;&nbsp;
            <span className="text-secondary fw-normal text-break">@{username} • Oct 12</span>
          </p>
          <p className="text-white mb-0 fw-lighter">{content}</p>
          <div className="pt-2 mb-0">
            <LikeButton tweetId={_id.toString()} likesQty={likes.length} />
          </div>
        </div>
      </div>
    )
  );
}

export default Tweet;
