import React from "react";
import { FaCheck } from "react-icons/fa";
import BookingModal from "../BookingModal/BookingModal";

const Product = ({ product, setSelectedProduct }) => {
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
    sold,
  } = product;
  return (
    <div className="card card-compact  bg-gray-200 shadow-xl">
      <div className="p-2">
        <figure>
          <img
            src={image}
            alt="productImage"
            className=" rounded-lg h-64 object-cover"
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
            <p>Available</p>
          )}
        </div>
        <p className="text-xl">Sale Price: ${price}</p>
        <div className="flex  font-bold">
          <p>Original Price: ${originalPrice}</p>
          <p>Years Of use: {useYears}y</p>
        </div>

        <p className="text-base font-bold">Seller: {seller}</p>
        <div className="flex ">
          <p>Phone: {phone}</p>
          <p>Location: {location}</p>
        </div>
        <div className="card-actions ">
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
