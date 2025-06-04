import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import LoginAnimation from "../../data/login_animation.json.json";
import { motion } from "motion/react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {
     const { loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
//   console.log(location.pathname);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(`${location.state?.from?.pathname ? location.state?.from?.pathname : "/"}`);
        Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Login Successful!💖",
                  showConfirmButton: false,
                  timer: 1500,
                });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        navigate(`${location.state?.from?.pathname ? location.state?.from?.pathname : "/"}`);
         Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Login Successful!💖",
                  showConfirmButton: false,
                  timer: 1500,
                });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center py-10">
      <motion.div
        animate={{ y: [20, 50, 20] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="card bg-base-100 w-full max-w-md items-center shrink-0 shadow-xl bg-linear-to-r from-orange-50 to-white hover:scale-105 transition-transform duration-300"
      >
        <div className="card-body py-8">
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-semibold text-center pb-5 border-b border-gray-300 dark:text-gray-800">
              Login Your Account
            </h2>
            <label className="label text-md font-semibold pt-5 pb-2 dark:text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full bg-base-200 border-none dark:text-gray-800"
              placeholder="Email Address"
              required
            />
            <label className="label text-md font-semibold pt-5 pb-2 dark:text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input w-full bg-base-200 border-none dark:text-gray-800"
              placeholder="Password"
              required
            />

            {error && (
                <p className="text-red-600 text-sm font-semibold dark:text-gray-800">{error}</p>
              )}

            <div className="pt-3 underline text-sm cursor-pointer dark:text-gray-800">
              Forgot password?
            </div>
            <button type="submit" className="btn btn-primary mt-4 w-full">
              Login
            </button>
            <p className="text-center pt-5 dark:text-gray-800">
              Dont’t Have An Account ?{" "}
              <Link to="/auth/register" className="text-orange-600">
                Register
              </Link>
            </p>
          </form>
          {/* Google Login */}
          <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] rounded-full">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </motion.div>
      <div>
        <Lottie
          animationData={LoginAnimation}
          loop={true}
          style={{ width: "400px" }}
        ></Lottie>
      </div>
    </div>
  );
};

export default Login;
