import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Tweet from "./Tweet";
import Trending from "./Trending";
import Avatar from "./Avatar";

function Profile() {
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/users/${user.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setUserData(response.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) getUser();
  }, [user]);

  return (
    userData && (
      <div className="profile">
        <div className="container ms-0">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8">
              <div className="border-blue position-relative">
                <div className="profile-header-img">
                  <div className="profile-avatar-wrapper position-relative">
                    <Avatar
                      imageName={userData.avatar}
                      classes={
                        "object-fit-cover border border-5 border-white rounded-circle w-100 h-100"
                      }
                    />
                  </div>
                </div>

                <div className="user-info d-flex flex-column px-4">
                  <div className="d-flex">
                    <div>
                      <p className="fs-4 text-white mb-0">
                        {userData.firstname} {userData.lastname}
                      </p>
                      <p className="text-secondary">@{userData.username}</p>
                    </div>
                    <div className="d-flex gap-3 ms-auto">
                      <p className="text-white">
                        {userData.followings?.length}
                        <span className="text-secondary"> Following</span>
                      </p>
                      <p className="text-white">
                        {userData.followers?.length}
                        <span className="text-secondary"> Followers</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-white">{userData.bio}</p>
                  {userData.tweets?.length > 0 && (
                    <div className="flex">
                      <p
                        className="text-white border-bottom border-primary border-2 mb-0 pb-2"
                        style={{ display: "inline-block" }}
                      >
                        Tweets
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {userData.tweets?.length > 0 ? (
                <ul className="p-0 list-unstyled">
                  {userData.tweets.map((tweet) => (
                    <li key={tweet._id}>
                      <Tweet tweet={tweet} author={userData} />
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </div>

            <Trending />
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
