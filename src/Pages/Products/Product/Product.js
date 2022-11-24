import React from "react";
import { FaCheck } from "react-icons/fa";

const Product = () => {
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Hp Notebook</h2>
        <p>Sale Price: $100</p>
        <p>Original Price: $300</p>
        <p>Years Of use: 5y</p>
        <p>
          Seller: Md Tarek Rahman
          <div className="badge ">
            <FaCheck />
          </div>
        </p>
        <p>Location: Dhaka</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
