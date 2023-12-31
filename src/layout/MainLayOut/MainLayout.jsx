import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";

// import Home from "../../pages/Home/Home";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
