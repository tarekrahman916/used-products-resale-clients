import { useState, useEffect, useContext } from "react";
import { authContext } from "../contexts/AuthProvider/AuthProvider";

const useToken = (email) => {
  const [token, setToken] = useState("");
  const { logOut } = useContext(authContext);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("laptopStoreToken", data.accessToken);
            setToken(data.accessToken);
          } else {
            logOut();
          }
        });
    }
  }, [email, logOut]);

  return [token];
};

export default useToken;
