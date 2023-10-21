import { NavLink } from "react-router-dom";
import logo from "../../assets/images/l.jpg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
const Navbar = () => {
  const { loading, user, logOut } = useContext(AuthContext);
  // console.log(loading, user);
  const handleLogout = () => {
    logOut()
      .then(toast("Logout successful"))
      .catch((error) => console.log(error.message));
  };
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
      {/* <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li> */}
    </>
  );
  return (
    <div className="navbar shadow-green-400 py-5 px-3">
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
        <div className="flex justify-center items-center ">
          {" "}
          <img className="h-[45px]" src={logo} alt="" />
          <h1 className="text-lg lg:text-5xl font-bold">
            e-Selling<span className="text-green-700 lg:text-4xl">.</span>{" "}
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{nav}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex-col items-center ">
          <div className="flex justify-center items-center">
            {user ? (
              <div className="">
                <div className="flex  justify-center">
                  <img
                    className="w-9 rounded-full"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                </div>
                <h1>{user?.displayName}</h1>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center">
            {user ? (
              <button onClick={handleLogout} className="btn  bg-green-400">
                Logout
              </button>
            ) : (
              <button className="btn bg-green-400 hover:bg-green-600">
                <NavLink to={"/login"}>Login</NavLink>
              </button>
            )}
            <ToastContainer></ToastContainer>
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
