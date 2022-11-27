import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyWishlist = () => {
  const { user } = useContext(authContext);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["wishlists", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/wishlists?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/wishlists/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Successfully Delete");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {products.length ? (
        <div>
          <div>
            <h2 className="text-4xl text-center font-semibold my-6">
              Wishlist
            </h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="hover">
                      <th></th>
                      <td>
                        <div className="avatar">
                          <div className="mask w-16 h-16">
                            <img
                              src={product.productImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td>{product.productName}</td>
                      <td>${product.price}</td>
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
      ) : (
        <div className="w-9/12 border shadow-lg">
          <h3 className="text-3xl text-center text-red-500 my-6">
            No product available in Wishlist.Please added Product
          </h3>
        </div>
      )}
    </div>
  );
};

export default MyWishlist;
