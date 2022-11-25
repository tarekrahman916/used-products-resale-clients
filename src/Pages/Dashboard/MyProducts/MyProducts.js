import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(authContext);

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      my Products
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
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
                <td>{product?.status ? "Sold" : "Available"}</td>

                <td>
                  {!product?.status && (
                    <button className="btn btn-sm btn-primary m">
                      Advertise
                    </button>
                  )}
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
