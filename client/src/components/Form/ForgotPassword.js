import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ForgotPasswordForm = () => {
  const [values, setValues] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
    alert("Reset Link Sent");
    navigate("/");
  };
  return (
    <div className="h-full  bg-gray-100 w-full py-10 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Password Reset
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Enter your email to get password reset link
          </p>

          <form onSubmit={submitHandler}>
            <div className="mt-4  w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                Email
              </lable>
              <input
                aria-label="email"
                value={values.email}
                onChange={handleChange("email")}
                type="email"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>

            <div className="mt-8">
              <button
                aria-label="forgot password"
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Submit
              </button>
            </div>
            <div className="mt-6 text-blue-700 font-medium text-sm flex items-center justify-center">
              <Link to="/signin">
                {/* <AiOutlineArrowLeft /> */}
                <span className="">Back to Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
