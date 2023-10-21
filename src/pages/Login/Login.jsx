import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import swal from "sweetalert";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(navigate);

    // login with email,password
    logIn(email, password)
      .then((result) => {
        swal("success", "Login successful", "success");
        setError("");
        e.target.reset();
        navigate(location.state ? location.state : "/");
        setError("");
        e.target.reset();
        console.log(result.user);
      })
      .catch((error) => {
        setError(`${error.message}`);
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-green-600">Login now!</h1>
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input relative input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-52  bottom-[220px] text-2xl"
                >
                  {showPassword ? (
                    <AiFillEye></AiFillEye>
                  ) : (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  )}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="w-[200px] mx-auto mb-2">
                {error && (
                  <h2 className=" text-sm h-1  w-64  font-medium text-red-600 ">
                    {error}
                  </h2>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="px-4 py-3 text-center">
              New to this website? please
              <Link
                className="ml-2 font-semibold hover:text-red-600 underline"
                to={"/signUp"}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
