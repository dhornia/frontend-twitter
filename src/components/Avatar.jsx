import React from "react";

function Avatar({ imageName }) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${imageName}`}
      alt="Avatar"
      className="avatar"
    />
  );
}

export default Avatar;
