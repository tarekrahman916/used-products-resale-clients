import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(authContext);
  console.log(user);

  return (
    <div>
      <div className="w-96 mx-auto border-2 my-14 text-center py-10 shadow-xl bg-slate-100">
        <div className="w-16 mx-auto rounded-full">
          {user?.photoURL ? (
            <img className="rounded-full" src={user?.photoURL} alt="" />
          ) : (
            <FaUserAlt className="w-12 h-12" />
          )}
        </div>
        <h2 className="text-4xl text-primary">{user?.displayName}</h2>
        <h4 className="text-2xl">Email: {user?.email}</h4>
        <p className="text-xl">Role: Admin</p>
      </div>
    </div>
  );
};

export default Dashboard;
