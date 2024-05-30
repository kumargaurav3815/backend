/** @format */

import { useState } from "react";
import forgotPasswordImg from "../assets/images/forgot-password.webp";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    // try {
    //   axios
    //     .post("http://localhost:5000/api/v1/user/patient/forgotPassword", {
    //       email,
    //     })
    //     .then((res) => {
    //       alert(res.status);
    //       // toast.success(res.data.message);
    //       // setIsAuthenticated(true);
    //       navigateTo("/");
    //       setEmail("");
    //       console.log(res.data);
    //       localStorage.setItem("token", res.data.token);
    //     });
    // } catch (error) {
    //   // toast.error(error.response.data.message);
    // }
    axios
      .post("http://localhost:5000/api/v1/user/patient/forgotPassword", {
        email,
      })
      .then((res) => {
        if (res.data.status === "Success") {
          navigateTo("/login");
        } else {
          navigateTo("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleRegisterNewUser = () => {
    navigateTo("/register");
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block ">
            <figure className="rounded-l-lg">
              <img src={forgotPasswordImg} className="w-full" alt="" />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Forgot Password
            </h3>

            <form onSubmit={handleLogin}>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-7">
                <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                  Reset Password
                </button>
              </div>
              <p className="mt-2 text-textColor text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-800" />
              <div>
                <button
                  className="w-full bg-slate-500 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                  onClick={handleRegisterNewUser}>
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
