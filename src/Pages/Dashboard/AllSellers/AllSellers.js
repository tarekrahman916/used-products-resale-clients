import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-products-resale-server-nine.vercel.app/users?role=seller",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("laptopStoreToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`https://used-products-resale-server-nine.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("User Deleted");
          refetch();
        }
      });
  };

  const handleVerify = (email) => {
    fetch(
      `https://used-products-resale-server-nine.vercel.app/users?email=${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("This seller is verified successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-6">All Sellers</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, i) => (
                <tr key={seller._id} className="hover">
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.role}</td>
                  <td>
                    <button
                      onClick={() => handleVerify(seller.email)}
                      className="btn btn-primary btn-sm"
                    >
                      {seller.status === "verified" ? "Verified" : "Verify"}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(seller._id)}
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

export default AllSellers;
