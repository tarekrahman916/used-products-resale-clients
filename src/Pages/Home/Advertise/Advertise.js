import React, { useEffect, useState } from "react";
import BookingModal from "../../Products/BookingModal/BookingModal";
import Product from "../../Products/Product/Product";

const Advertise = () => {
  const [advertiseProducts, setAdvertiseProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://used-products-resale-server-nine.vercel.app/products/advertise",
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("laptopStoreToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAdvertiseProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className={`${!advertiseProducts.length && "hidden"} `}>
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center my-6">
            Advertising Products
          </h2>
          <hr className="border-2 border-primary lg:w-1/3 mx-auto mt-3" />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {advertiseProducts.map((product) => (
            <Product
              key={product._id}
              product={product}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>
      </div>
      <BookingModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

export default Advertise;
