import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(authContext);

  const {
    data: myProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://used-products-resale-server-nine.vercel.app/products?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("laptopStoreToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
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
        refetch();
      })
      .catch((err) => console.error(err));
  };

  const handleAdvertise = (id) => {
    fetch(
      `https://used-products-resale-server-nine.vercel.app/products?id=${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Your product added advertising");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="my-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">My Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((product, i) => (
              <tr key={product._id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask  w-12 h-12">
                      <img
                        src={product.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product?.sold ? "Sold" : "Available"}</td>
                <td>
                  {!product?.sold && !product.advertise ? (
                    <button
                      onClick={() => handleAdvertise(product._id)}
                      className="btn btn-sm btn-primary mr-3"
                    >
                      Advertise
                    </button>
                  ) : (
                    <span className="text-xl text-primary">Advertized</span>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-sm btn-error"
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
  );
};

export default MyProducts;
