import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  const [selectedProduct, setSelectedProduct] = useState("");
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>
      {selectedProduct && (
        <BookingModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
};

export default Products;
