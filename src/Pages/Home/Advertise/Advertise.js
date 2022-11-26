import React, { useEffect, useState } from "react";
import BookingModal from "../../Products/BookingModal/BookingModal";
import Product from "../../Products/Product/Product";

const Advertise = () => {
  const [advertiseProducts, setAdvertiseProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products?advertise=true")
      .then((res) => res.json())
      .then((data) => setAdvertiseProducts(data));
  }, []);

  console.log(advertiseProducts);
  return (
    <div>
      {advertiseProducts.length > 0 && (
        <div>
          <h2 className="text-4xl text-center my-6">Advertise Products</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {advertiseProducts.map((product) => (
              <Product
                product={product}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      )}
      <BookingModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

export default Advertise;
