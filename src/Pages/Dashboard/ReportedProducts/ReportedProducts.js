import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const ReportedProducts = () => {
  const {
    data: reportedProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reported-products"],
    queryFn: () =>
      axios
        .get(
          "https://used-products-resale-server-nine.vercel.app/products/report?reported=true"
        )
        .then((res) => {
          const data = res.data;
          return data;
        }),
  });

  const handleDelete = (id) => {
    fetch(
      `https://used-products-resale-server-nine.vercel.app/products/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully deleted this products");
        refetch();
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <h2 className="text-4xl text-center font-semibold my-6">
          Reported Products
        </h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Product</th>
                <th>Seller</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reportedProducts.map((product, i) => (
                <tr key={product._id} className="hover">
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask w-16 h-16">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.seller}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportedProducts;
