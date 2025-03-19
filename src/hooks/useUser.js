import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function useUser() {
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/user/${user.userId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.accessToken}}`,
          },
        });
        console.log(response);

        setUserData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchUser();
  }, []);

  return { userData };
}

export default useUser;
