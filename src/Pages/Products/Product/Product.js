import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";
import {
  CheckBadgeIcon,
  FlagIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const Product = ({ product, setSelectedProduct }) => {
  const { user } = useContext(authContext);

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

  const handleAddWishlist = () => {
    const addedProduct = {
      productName: name,
      productImage: image,
      price,
      sellerLocation: location,
      sellerPhone: phone,
      name: user?.displayName,
      email: user?.email,
    };

    fetch("http://localhost:5000/wishlists", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`${addedProduct.productName} is added your wishlist`);
        }
      });
  };

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

        <div className="card-actions ">
          <button
            onClick={handleAddWishlist}
            className="btn btn-error btn-sm flex text-white"
          >
            <ShoppingBagIcon className="w-5 text-yellow-200 mr-2" />
            Wishlist
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
