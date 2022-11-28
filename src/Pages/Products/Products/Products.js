import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import BookingModal from "../BookingModal/BookingModal";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  const navigation = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState("");

  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
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
