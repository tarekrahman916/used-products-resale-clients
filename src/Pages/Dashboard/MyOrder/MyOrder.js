import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyOrder = () => {
  const { user } = useContext(authContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {orders.length ? (
        <div>
          <h2 className="text-4xl text-center font-semibold my-6">My Orders</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr key={order._id} className="hover">
                    <th>{i + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask w-16 h-16">
                          <img
                            src={order.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{order.productName}</td>
                    <td>{order.price}</td>
                    <td>
                      {order.price && !order.paid && (
                        <Link to={`/dashboard/payment/${order._id}`}>
                          <button className="btn btn-secondary btn-sm">
                            Pay
                          </button>
                        </Link>
                      )}
                      {order.paid && (
                        <span className="text-primary font-bold">Paid </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="w-9/12 border shadow-lg">
          <h3 className="text-3xl text-center text-red-500 my-6">
            No order available.Please order
          </h3>
        </div>
      )}
    </div>
  );
};

export default MyOrder;
