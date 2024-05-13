import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import imgg from "../assets/imgg.png";
import useLogin from "../hooks/useLogin";
import { Spin } from "antd";

const Login = () => {
  const { error, loading, loginUser } = useLogin();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleLogin = async (e) => {
    e.preventDefault()
    await loginUser(formData);
  };
  
  return (
    <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="w-auto mx-auto h-50" src={imgg} alt="Your Company" />
      </div>

      <div className="mt-5 sm:mx-auto sm:w-3/4 md:w-3/4 lg:w-1/2">
        <h1 className="mt-5 mb-4 text-2xl text-left text-gray y-900 mb">
          Login
        </h1>

        <form
          className="space-y-6"
          onSubmit={handleLogin}
          autoComplete="off"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <TextField
                id="email"
                label="Email Address"
                variant="outlined"
                name="email"
                fullWidth
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-12 hover:text-pink-500 hover:border-pink-500">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                fullWidth
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "pink", // Change outline color on hover to pink
                    },
                  "& .MuiInputLabel-root, & .MuiOutlinedInput-root .MuiInputLabel-root":
                    {
                      color: "rose !important", // Set label text color to pink
                    },
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? <Spin /> : "Sign In"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-sm text-center text-gray-500">
          Don't have an account?
          <span className="ml-2">
            <a
              href="#"
              className="font-semibold leading-6 text-pink-400 hover:text-indigo-500"
            >
             Register
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
