import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import { FaGoogle } from "react-icons/fa6";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const { signIn, googleSignUp } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password, name, photo);
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must be contain capital letters");
      return;
    } else if (!/[@$!%*#?&]/.test(password)) {
      setError("Password must be contain one special character");
      return;
    }

    signIn(email, password)
      .then((result) => {
        // console.log(result.user);
        swal("success", "Sign Up successful", "success");
        setError("");
        navigate(location.state ? location.state : "/");
        e.target.reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        console.log(error.message);

        setError(`${error.message}`);
      });
  };

  const handleGoogleLog = () => {
    googleSignUp().then(() => {
      swal("success", "Login successful", "success");
      setError("");
      navigate(location.state ? location.state : "/").catch(
        setError(`${error.message}`)
      );
    });
  };

  return (
    <div>
      <div className="hero mx-auto bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-green-600">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute  left-72  bottom-[265px] text-2xl"
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
              <div className=" mx-auto mb-3">
                {error && (
                  <h2 className=" text-sm h-1  w-64  font-medium text-red-600 ">
                    {error}
                  </h2>
                )}
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
            <div className="px-4 py-3 text-center">
              Already have an account? please
              <Link
                className="ml-2 font-semibold hover:text-red-600 underline"
                to={"/login"}
              >
                Login
              </Link>
              <div className="btn">
                <button
                  onClick={handleGoogleLog}
                  className="flex justify-center items-center mx-auto gap-3 "
                >
                  <span className="text-red-600 text-2xl">
                    <FaGoogle></FaGoogle>
                  </span>
                  signup with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
