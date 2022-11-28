import React from "react";
import { CheckBadgeIcon, FlagIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const Product = ({ product, setSelectedProduct }) => {
  const {
    _id,
    name,
    image,
    price,
    originalPrice,
    useYears,
    seller,
    phone,
    location,
    postDate,
    description,
    sold,
  } = product;

  const handleAddReport = (id) => {
    fetch(
      `https://used-products-resale-server-nine.vercel.app/products/report/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`You are reported the ${name}`);
        }
      });
  };

  return (
    <div className="card card-compact  bg-gray-200 shadow-xl z-0">
      <div className="p-2">
        <figure>
          <img
            src={image}
            alt="productImage"
            className=" rounded-lg h-64 object-cover w-full"
          />
        </figure>
      </div>
      <div className="card-body text-gray-900">
        <h2 className="card-title">{name}</h2>

        <div className="flex ">
          <p>Post Date: {postDate}</p>
          {sold ? (
            <p className=" text-xl font-semibold text-red-500">Sold</p>
          ) : (
            <p className="font-bold">Available</p>
          )}
        </div>
        <p className="text-xl">Sale Price: ${price}</p>
        <div className="flex  font-bold">
          <p>Original Price: ${originalPrice}</p>
          <p>Years Of use: {useYears}y</p>
        </div>

        <p className="text-base font-bold flex">
          Seller: {seller}
          {product?.sellerStatus === "verified" && (
            <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
          )}
        </p>
        <div className="flex ">
          <p>Phone: {phone}</p>
          <p>Location: {location}</p>
        </div>
        <p className="border-2 border-white p-3">{description}</p>

        <div className="card-actions ">
          <button
            onClick={() => handleAddReport(_id)}
            className="btn btn-error btn-sm flex text-white my-3"
          >
            <FlagIcon className="w-5 text-yellow-200 mr-2" />
            Report to admin
          </button>

          {!sold && (
            <label
              htmlFor="booking-modal"
              onClick={() => setSelectedProduct(product)}
              type="submit"
              className="btn btn-primary w-full"
            >
              Book Now
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
