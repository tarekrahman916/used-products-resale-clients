import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import BtnSpinner from "../../components/BtnSpinner/BtnSpinner";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { createUser, updateUser } = useContext(authContext);
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token] = useToken(userEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.role.value;
    const password = form.password.value;
    setError("");

    if (password.length < 6) {
      setError("Password should be at 6 character");
      return;
    }

    console.log(name, email, role, password);
    setIsLoading(true);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUserEmail(user?.email);
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserDb(name, email, role);

            setIsLoading(false);
            toast.success("User created successfully");
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
          });
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
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
        <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up</h2>
        <p className="text-sm text-center text-gray-300">
          Already have an account?
          <Link to="/login" className="focus:underline hover:underline">
            Login
          </Link>
        </p>
        <div className="my-6 space-y-4"></div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">***</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form
          onSubmit={handleSignUp}
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                data-temp-mail-org="2"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                data-temp-mail-org="2"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your Role
              </label>
              <select
                name="role"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                data-temp-mail-org="2"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
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
            {isLoading ? <BtnSpinner /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
