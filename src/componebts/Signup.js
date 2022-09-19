import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import { registration } from "../redux/auth/authAction";

function Signup() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();

  const initialFormData = Object.freeze({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`accounts/register/`, {
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        password_confirm: formData.password_confirm,
      })
      .then((res) => {
        history("/login");
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className="container mx-auto mt-32 block p-8 rounded-lg shadow-lg bg-white max-w-md">
        <form className="" onSubmit={handleSignup} ref={form}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-6">
              <input
                type="text"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder='Last Name'
              />
            </div>
          </div>

          <div className="mb-6">
            <input
              type="text"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder='User Name'
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='email'
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="password_confirm"
              value={formData.password_confirm}
              onChange={handleChange}
              placeholder='Confirm Password'
            />
          </div>
          <div>
            <button className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" disabled={loading}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
