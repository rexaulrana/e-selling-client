import { NavLink } from "react-router-dom";
import logo from "../../assets/images/l.jpg";
const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/myCart"}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  py-5 px-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {nav}
          </ul>
        </div>
        <div className="flex">
          {" "}
          <img className="h-[45px]" src={logo} alt="" />
          <h1 className="text-xl  md:text-5xl font-bold">
            e-Selling<span className="text-green-700 text-4xl">.</span>{" "}
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{nav}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex-col items-center ">
          <div className="flex justify-center items-center">
            <h1>user</h1>
            <h2> </h2>
          </div>
          <div>
            <h2>name</h2>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
