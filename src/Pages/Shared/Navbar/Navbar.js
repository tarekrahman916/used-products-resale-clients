import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-products-resale-server-nine.vercel.app/categories"
      );
      const data = await res.json();
      return data;
    },
  });

  const menuData = (
    <>
      <li>
        <Link to="/" className="font-bold ">
          Home
        </Link>
      </li>
      <li>
        <p className="font-bold ">
          Categories
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </p>
        <ul className="p-2 bg-base-100 w-36 z-10">
          {categories.map((category) => (
            <li key={category._id}>
              <Link to={`/categories/${category._id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <Link to="/blogs" className="font-bold">
          Blogs
        </Link>
      </li>
      {user?.uid && (
        <>
          <li>
            <Link to="/dashboard" className="font-bold">
              Dashboard
            </Link>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={2}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuData}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">
          Laptop Store
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuData}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <button onClick={handleSignOut} className="btn btn-primary">
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </>
        )}
        <label
          htmlFor="dashboard-drawer"
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
