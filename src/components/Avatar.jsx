import React from "react";
import Image from "react-bootstrap/Image";

function Avatar({ imageName, classes }) {
  return (
    <Image
      src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/${imageName}`}
      alt="Avatar"
      className={`avatar ${classes}`}
      fluid
    />
  );
}

export default Avatar;
