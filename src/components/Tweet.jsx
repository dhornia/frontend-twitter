import React from "react";

import Avatar from "./Avatar";

function Tweet({ firstname, lastname, username, likes, content, avatar, createdAt }) {
  return (
    <div className="p-3 d-flex gap-3 border-start border-end border-bottom border-secondary">
      <Avatar imageName={avatar} />
      <div className="text-container">
        <p className="text-white fw-semibold mb-0">
          {firstname} {lastname} &nbsp;&nbsp;
          <span className="text-secondary fw-normal">
            @{username} • {createdAt}
          </span>
        </p>
        <p className="text-white mb-0 fw-lighter">{content}</p>
        <p className="pt-2 mb-0">
          <i className="bi bi-heart text-secondary me-2"></i>
          <span className="text-secondary">{likes}</span>
        </p>
      </div>
    </div>
  );
}

export default Tweet;
