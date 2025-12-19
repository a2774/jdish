"use client";
import toast from "react-hot-toast";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import {
  signupUser,
  resetSignupSuccess,
} from "../../app/src/redux/auth/authSlice";
import { useRouter } from "next/navigation";

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { signupSuccess, loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      toast.error("Please accept Terms & Privacy Policy");
      return;
    }

    if (formData.password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    dispatch(signupUser(formData));
  };

  useEffect(() => {
    if (signupSuccess) {
      toast.success("Signup successful 🎉 Please login");
      router.push("/login");
      dispatch(resetSignupSuccess());
    }
  }, [signupSuccess, dispatch, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="text-center mb-6">
        <h1 className="text-[#f4514f] text-3xl font-bold mt-10">Jdish</h1>
        <p className="text-xs text-gray-500">Share your culinary journey</p>
      </div>

      <div
        style={{ width: "360px" }}
        className=" bg-white rounded-xl shadow-xl p-8"
      >
        <div className="flex justify-between w-full mb-8 border-b border-gray-200">
          <Link
            href="/login"
            className="w-1/2 text-center pb-3 text-xs text-gray-400 font-medium"
          >
            Login
          </Link>
          <button className="w-1/2 text-center text-xs  pb-3 text-[#f4514f] font-medium border-b border-[#f4514f]">
            Sign Up
          </button>
        </div>

        <form className="space-y-1" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="mt-1 w-full px-4 py-2 text-xs 
border border-gray-200 rounded-md 
outline-none 
hover:border-[#f4514f]
focus:border-[#f4514f]
focus:ring-2 focus:ring-[#f4514f]/40
transition-all duration-200"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 w-full px-4 py-2 text-xs 
border border-gray-200 rounded-md 
outline-none 
hover:border-[#f4514f]
focus:border-[#f4514f]
focus:ring-2 focus:ring-[#f4514f]/40
transition-all duration-200"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="mt-1 w-full px-4 py-2 text-xs 
border border-gray-200 rounded-md 
outline-none 
hover:border-[#f4514f]
focus:border-[#f4514f]
focus:ring-2 focus:ring-[#f4514f]/40
transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                <LiaEyeSolid />
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 text-xs 
border border-gray-200 rounded-md 
outline-none 
hover:border-[#f4514f]
focus:border-[#f4514f]
focus:ring-2 focus:ring-[#f4514f]/40
transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                <LiaEyeSolid />
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
              className="mt-1"
            />
            <p className="text-xs  border-gray-400">
              I accept the{" "}
              <span className="text-[#f4514f] text-xs cursor-pointer">
                Terms
              </span>{" "}
              and{" "}
              <span className="text-[#f4514f] text-xs cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f4514f] text-white py-3 rounded-md font-semibold hover:bg-[#e04341] disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-3 text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="flex gap-4 text-xs text-gray-600">
            <button
              type="button"
              className="flex-1 bg-[#f5f5f5] border border-gray-200 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <span className="text-xs">
                <FcGoogle />
              </span>
              Google
            </button>

            <button
              type="button"
              className="flex-1 bg-[#f5f5f5] border border-gray-200 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <span className="text-blue-600 text-xs">
                <IoLogoFacebook />
              </span>
              Facebook
            </button>
          </div>
        </form>
      </div>
      <p className="text-xs text-gray-600 text-center whitespace-nowrap mt-6 mb-10">
        <span>For food creators, chefs, and culinary enthusiasts </span>
        <span className="text-[#f4514f] cursor-pointer">Learn more</span>
      </p>
    </div>
  );
}
