import React from "react";

function Trending({ category, tag, tweetsQty }) {
  return (
    <>
      <p className="text-secondary mb-0">{category} • Trending</p>
      <p className="fw-bold text-white mb-0">#{tag}</p>
      <p className="text-secondary mb-0">{tweetsQty} Tweets</p>
    </>
  );
}

export default Trending;
