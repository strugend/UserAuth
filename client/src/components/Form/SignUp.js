import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const [values, setValues] = useState({
    message: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (values.password === values.confirmPassword) {
      alert("Signup Success");
      console.log(values);
    } else {
      alert("Password Don't Match");
      console.log(values);
    }
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
            Create your new account
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Already have an account?
            <Link to="/signin">
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-blue-800 cursor-pointer"
              >
                {" "}
                SignIn here
              </span>
            </Link>
          </p>
          <button
            aria-label="Continue with google"
            // onClick={googleSignIn}
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <FcGoogle size={25} />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <form onSubmit={submitHandler}>
            <div className="  w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                User Name
              </lable>
              <input
                value={values.username}
                onChange={handleChange("username")}
                aria-label="enter email adress"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
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

            <div className="mt-4  w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                Password
              </lable>
              <div className="relative flex items-center justify-center">
                <input
                  value={values.password}
                  onChange={handleChange("password")}
                  aria-label="enter Password"
                  type={passwordShown ? "text" : "password"}
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div
                  className="absolute right-0 mt-2 mr-3 cursor-pointer"
                  onClick={togglePassword}
                >
                  {!passwordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
            </div>
            <div className="mt-4  w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                Confirm Password
              </lable>
              <div className="relative flex items-center justify-center">
                <input
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  aria-label="enter Password"
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
