import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import RegisterAnimation from "../../data/register_animation.json.json";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [passError, setPassError] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.cheakbox.value;
    console.log(name, photo, email, password);

    // Cheakbox validation
    if (!terms) {
      setPassError("Please accept our terms and conditons");
      return;
    }
    //Password validation
    const minLength = /^.{6,}$/;
    const digitValid = /(?=.*\d)/;
    const lowerCaseValid = /(?=.*[a-z])/;
    const upperCaseValid = /(?=.*[A-Z])/;

    if (minLength.test(password) === false) {
      setPassError("Password Must Be 6 Charecter and Longer");
      return;
    } else if (digitValid.test(password) === false) {
      setPassError("Password Must have One Numaric Digit!");
      return;
    } else if (lowerCaseValid.test(password) === false) {
      setPassError("Password Must Have At Least One Lowercase Letter");
      return;
    } else if (upperCaseValid.test(password) === false) {
      setPassError("Password Must Have At Least One Uppercase Letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        return updateUser({
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        navigate(`${location.state?.from?.pathname ? location.state?.from?.pathname : "/"}`);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully!💖",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError("Error:", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        return updateUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      })
      .then(() => {
        navigate(`${location.state?.from?.pathname ? location.state?.from?.pathname : "/"}`);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully!💖",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-10 px-3">
      <div
        className="card bg-base-100 w-full max-w-md items-center shrink-0 shadow-xl bg-linear-to-r from-10% to-90% from-blue-50 to-white hover:scale-103 transition-transform duration-300 order-2 lg:order-1"
      >
        <div className="card-body py-5">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl text-blue-500 font-semibold text-center pb-5 border-b border-gray-300">
              Register Your Account
            </h2>
            <label className="label text-md font-semibold pt-5 pb-2 dark:text-gray-800">
              Your Name
            </label>
            <input
              type="name"
              name="name"
              className="input w-full bg-base-200 border-none dark:text-gray-800"
              placeholder="Your Name"
              required
            />
            <label className="label text-md font-semibold pt-5 pb-2 dark:text-gray-800">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="input w-full bg-base-200 border-none dark:text-gray-800"
              placeholder="Your Photo"
              required
            />
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
            <p className="text-xs pt-1 text-gray-600 dark:text-gray-800">
              Note: Password must have at least 6 charecters & one lowercase,
              one uppercase and one numaric digit!
            </p>
            <div className="pt-3">
              <label className="label">
                <input
                  type="checkbox"
                  name="cheakbox"
                  defaultChecked
                  className="checkbox font-semibold dark:text-gray-800"
                />
                Accept Terms & Conditions
              </label>
            </div>
            {passError && (
              <p className="text-red-500 font-semibold dark:text-gray-800">
                {passError}
              </p>
            )}
            {error && (
              <p className="text-red-500 font-bold dark:text-gray-800">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="btn btn-success mt-4 w-full rounded-full"
            >
              Register
            </button>
            <p className="text-center pt-5 dark:text-gray-800">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-orange-600">
                Login
              </Link>
            </p>
          </form>
          {/* Google Register */}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] rounded-full"
          >
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
      </div>
      <div className="order-1 lg:order-2">
        <Lottie
          animationData={RegisterAnimation}
          loop={true}
          className="w-[300px] md:w-[400px] lg:w-[500px]"
        ></Lottie>
      </div>
    </div>
  );
};

export default Register;
