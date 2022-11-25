import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Loader from "../../../components/Loader/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="my-10">
        <h2 className="text-4xl text-center font-bold">All Categories</h2>
        <hr className="border-2 border-primary w-1/2 mx-auto mt-3" />
      </div>
      <div className="flex gap-8 justify-center">
        {categories.map((category) => (
          <Link key={category._id} to={`/categories/${category._id}`}>
            <div className="bg-indigo-400 shadow-md px-10 py-5 rounded-lg flex gap-2 items-center">
              <h2 className="text-3xl text-white text-center">
                {category.name}
              </h2>
              <FaArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
