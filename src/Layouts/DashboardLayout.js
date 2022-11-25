import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(authContext);
  console.log(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/admin/allsellers">All Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/admin/allbuyers">All Buyers</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/seller/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/seller/myproducts">My Products</Link>
                </li>
              </>
            )}
            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myorder">My Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
