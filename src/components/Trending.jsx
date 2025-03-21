import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Col } from "react-bootstrap";

const trending = [
  {
    id: nanoid(),
    category: "Programming",
    tag: "MongoVsSequelize",
    tweetsQty: "97.5K",
  },
  {
    id: nanoid(),
    category: "Entertainment",
    tag: "StarWars",
    tweetsQty: "97.5K",
  },
  {
    id: nanoid(),
    category: "News",
    tag: "LifeInMars",
    tweetsQty: "97.5K",
  },
];

function Trending() {
  return (
    <Col lg={3} className="sticky-top d-none d-lg-block">
      <div className="trending align-self-start mt-4 p-3">
        <p className="fs-4 text-white">What's happening</p>
        <ul className="list-unstyled">
          {trending.map((item) => (
            <li key={item.id} className="mb-3">
              <p className="text-secondary mb-0">{item.category} • Trending</p>
              <p className="fw-bold text-white mb-0">#{item.tag}</p>
              <p className="text-secondary mb-0">{item.tweetsQty} Tweets</p>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );
}

export default Trending;
