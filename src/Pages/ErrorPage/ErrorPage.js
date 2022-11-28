import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";

const ErrorPage = () => {
  const { logOut } = useContext(authContext);

  const error = useRouteError();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(error);
  return (
    <div>
      <section className="flex items-center h-full sm:p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-40 h-40 dark:text-gray-600"
          >
            <path
              fill="currentColor"
              d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
            ></path>
            <rect
              width="176"
              height="32"
              x="168"
              y="320"
              fill="currentColor"
            ></rect>
            <polygon
              fill="currentColor"
              points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
            ></polygon>
            <polygon
              fill="currentColor"
              points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
            ></polygon>
          </svg>
          <p className="text-3xl">Sorry, we couldn't find this page.</p>
          <h2 className="mb-5 font-extrabold text-9xl ">
            <span className="sr-only">Error</span>
            {error.status}
          </h2>
          <p className="text-red-600 text-xl font-bold  ">
            {error.statusText || error.message}
          </p>
          <h2 className="text-3xl">
            Please{" "}
            <Link to="/login">
              <button
                onClick={handleLogout}
                className="btn btn-secondary px-5  font-bold"
              >
                Log Out
              </button>
            </Link>{" "}
            and log back in.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
