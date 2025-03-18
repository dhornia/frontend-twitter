import React from "react";

function Tweet() {
  return (
    <div className="border border-secondary p-3 d-flex gap-3">
      <img src="images/avatars/hack-academy.jpg" className="rounded-circle avatar" alt="Avatar" />

      <div className="text-container">
        <p className="text-white fw-semibold mb-0">
          Hack Academy&nbsp;&nbsp;{" "}
          <span className="fw-lighter text-secondary">@HackAcademyDev • Oct 12</span>
        </p>
        <p className="text-white mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel purus non justo
          ullamcorper tincidunt non non neque.
        </p>
        <p className="pt-2 mb-0">
          <i className="bi bi-heart text-secondary me-2"></i>
          <span className="text-secondary">120</span>
        </p>
      </div>
    </div>
  );
}

export default Tweet;
