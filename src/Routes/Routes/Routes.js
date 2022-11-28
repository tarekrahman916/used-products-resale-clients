import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedProducts from "../../Pages/Dashboard/ReportedProducts/ReportedProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/categories/:id",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://used-products-resale-server-nine.vercel.app/products/categories/${params.id}`
          ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/admin/allsellers",
        element: (
          <AdminRoute>
            <AllSellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/reported-products",
        element: (
          <AdminRoute>
            <ReportedProducts />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/seller/addproduct",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
        loader: () =>
          fetch(
            "https://used-products-resale-server-nine.vercel.app/categories"
          ),
      },
      {
        path: "/dashboard/seller/myproducts",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myorder",
        element: (
          <BuyerRoute>
            <MyOrder />
          </BuyerRoute>
        ),
      },

      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://used-products-resale-server-nine.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
