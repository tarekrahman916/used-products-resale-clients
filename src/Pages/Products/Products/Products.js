import React from "react";
import Product from "../Product/Product";

const Products = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {[...Array(9)].map((p) => (
        <Product />
      ))}
    </div>
  );
};

export default Products;
