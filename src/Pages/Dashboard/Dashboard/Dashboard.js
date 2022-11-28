import React, { useContext, useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(authContext);
  const [loginUser, setLoginUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://used-products-resale-server-nine.vercel.app/users/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoginUser(data);
        setIsLoading(false);
      });
  }, [user?.email]);

  const { name, email, role } = loginUser;

  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="w-96 mx-auto border-2 my-14 text-center py-10 shadow-xl bg-slate-100">
          <div className="w-16 mx-auto rounded-full">
            {user?.photoURL ? (
              <img className="rounded-full" src={user?.photoURL} alt="" />
            ) : (
              <FaUserAlt className="w-12 h-12" />
            )}
          </div>
          <h2 className="text-4xl text-primary">{name}</h2>
          <h4 className="text-2xl">Email: {email}</h4>
          <p className="text-xl">Role: {role}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
