import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";
import BtnSpinner from "../../components/BtnSpinner/BtnSpinner";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { signIn, googleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token] = useToken(userEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    setIsLoading(true);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUserEmail(user?.email);
        setIsLoading(false);
        toast.success("User login successfully ");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const name = user?.displayName;
        const email = user?.email;
        const role = "buyer";
        saveUserDb(name, email, role);
        setUserEmail(user?.email);
        toast.success("Login successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const saveUserDb = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://used-products-resale-server-nine.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center text-gray-200">
          Don't have account?
          <Link to="/signup" className="focus:underline hover:underline">
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleLogin}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400 btn text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form
          onSubmit={handleLogin}
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                data-temp-mail-org="2"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <btn
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </btn>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>
            <p className="text-red-600">{error}</p>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
          >
            {isLoading ? <BtnSpinner /> : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
