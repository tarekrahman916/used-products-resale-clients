import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Loader from "../../../components/Loader/Loader";
import { BeakerIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

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
    <section className="md:mb-20">
      <div className="my-16">
        <h2 className="text-4xl text-center font-bold">All Categories</h2>
        <hr className="border-2 border-primary lg:w-1/3 mx-auto mt-3" />
      </div>
      <div className="grid lg:grid-cols-3 gap-8 justify-center md:mx-32">
        {categories.map((category) => (
          <Link key={category._id} to={`/categories/${category._id}`}>
            <div className="bg-primary shadow-md px-10 py-5 rounded-lg flex gap-2 justify-center items-center">
              <h2 className="text-3xl text-white text-center">
                {category.name}
              </h2>
              <ArrowLongRightIcon className="h-12 w-6 text-white hover:w-8" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
