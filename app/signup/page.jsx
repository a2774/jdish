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
import Navbar from "../../components/navbar";

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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms)
      return toast.error("Please accept Terms & Privacy Policy");
    if (formData.password !== confirmPassword)
      return toast.error("Passwords do not match");
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
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        {/* LOGO */}
        <div className="text-center mb-6">
          <h1 className="text-[#f4514f] text-3xl font-bold">Jdish</h1>
          <p className="text-xs text-gray-500">Share your culinary journey</p>
        </div>

        {/* CARD */}
        <div className="w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">
          {/* TABS */}
          <div className="flex mb-6 border-b">
            <Link
              href="/login"
              className="w-1/2 text-center pb-3 text-xs text-gray-400 font-medium"
            >
              Login
            </Link>
            <button className="w-1/2 text-center pb-3 text-xs text-[#f4514f] font-medium border-b-2 border-[#f4514f]">
              Sign Up
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="text-xs font-medium text-gray-700 capitalize">
                  {field === "name" ? "Full Name" : "Email"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 text-sm border border-gray-200 rounded-md
                focus:border-[#f4514f] focus:ring-2 focus:ring-[#f4514f]/40 outline-none"
                />
              </div>
            ))}

            {/* PASSWORD */}
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
                  required
                  className="mt-1 w-full px-4 py-2 text-sm border border-gray-200 rounded-md
                focus:border-[#f4514f] focus:ring-2 focus:ring-[#f4514f]/40 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  <LiaEyeSolid />
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-xs font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-2 text-sm border border-gray-200 rounded-md
                focus:border-[#f4514f] focus:ring-2 focus:ring-[#f4514f]/40 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  <LiaEyeSolid />
                </button>
              </div>
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
              />
              <p className="text-xs text-gray-600">
                I accept the <span className="text-[#f4514f]">Terms</span> and{" "}
                <span className="text-[#f4514f]">Privacy Policy</span>
              </p>
            </div>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f4514f] text-white py-2.5 rounded-md font-semibold
            hover:bg-[#e04341] transition disabled:opacity-60"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            {/* SOCIAL */}
            <div className="flex items-center my-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="px-3 text-xs text-gray-400">
                or continue with
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex gap-3">
              <button className="flex-1 border rounded-md py-2 flex justify-center items-center gap-2">
                <FcGoogle /> Google
              </button>
              <button className="flex-1 border rounded-md py-2 flex justify-center items-center gap-2">
                <IoLogoFacebook className="text-blue-600" /> Facebook
              </button>
            </div>
          </form>
        </div>

        {/* FOOTER */}
        <p className="text-xs text-gray-600 mt-6 text-center">
          For food creators & chefs ·{" "}
          <span className="text-[#f4514f] cursor-pointer">Learn more</span>
        </p>
      </div>
    </>
  );
}
