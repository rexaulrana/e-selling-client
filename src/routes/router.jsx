import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayOut/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Brands from "../components/Brands/Brands";
import Products from "../pages/Products/Products";
import Details from "../pages/Details/Details";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import SignUp from "../pages/Signup/SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/mycart"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allBrands",
        element: <Brands></Brands>,
      },
      {
        path: "/brands/:brandName",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/allProducts"),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/allProducts"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allProducts/${params.id}`),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
