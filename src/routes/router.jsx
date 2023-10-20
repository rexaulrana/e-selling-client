import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayOut/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Brands from "../components/Brands/Brands";
import Products from "../pages/Products/Products";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
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
        element: <Details></Details>,
        loader: () => fetch("http://localhost:5000/allProducts"),
      },
    ],
  },
]);

export default router;
