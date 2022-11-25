import React from "react";
import { FaCheck } from "react-icons/fa";

const Product = ({ product }) => {
  const {
    name,
    image,
    price,
    originalPrice,
    useYears,
    seller,
    phone,
    location,
    postDate,
  } = product;
  return (
    <div className="card card-compact  bg-primary shadow-xl">
      <div className="p-2">
        <figure>
          <img src={image} alt="productImage" className=" rounded-lg" />
        </figure>
      </div>
      <div className="card-body text-white">
        <h2 className="card-title">{name}</h2>
        <span>Post Date: {postDate}</span>
        <p className="text-xl">Sale Price: {price}</p>
        <div className="flex gap-3 font-bold">
          <p>Original Price: {originalPrice}</p>
          <p>Years Of use: {useYears}y</p>
        </div>

        <p className="text-base font-bold">Seller: {seller}</p>
        <div className="flex ">
          <p>Phone: {phone}</p>
          <p>Location: {location}</p>
        </div>
        <div className="card-actions ">
          <button type="submit" className="btn btn-secondary w-full">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
