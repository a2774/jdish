"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../app/src/redux/auth/authSlice";
import { FcGoogle } from "react-icons/fc";
import { LiaEyeSolid } from "react-icons/lia";
import { IoLogoFacebook } from "react-icons/io5";
import toast from "react-hot-toast";
export default function Page() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      loginUser({
        email,
        password,
        rememberMe,
      })
    );
  };

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      toast.success("Welcome back!");
      router.replace("/");
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="text-center mb-6">
        <h1 className="text-[#f4514f] text-3xl font-bold mt-10">Jdish</h1>
        <p className=" text-gray-500 text-xs">Share your culinary journey</p>
      </div>

      <div
        className="w-full max-w-[380px] bg-white rounded-xl shadow-xl p-8 mx-4"
      >
        <div className="flex w-full mb-8 border-b border-gray-200">
          <Link
            href="/login"
            className={`w-1/2 text-center pb-3 font-medium text-xs ${pathname === "/login"
                ? "text-[#f4514f] border-b-2 border-[#f4514f]"
                : "text-gray-400"
              }`}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={`w-1/2 text-center pb-3 text-xs text-gray-400 font-normal hover:font-bold hover:text-black transition ${pathname === "/signup"
                ? "text-[#f4514f] border-b-2 border-[#f4514f]"
                : "text-gray-400"
              }`}
          >
            Sign Up
          </Link>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs text-gray-600font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <label className=" font-medium text-xs text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-xs text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <span className="text-[#f4514f] cursor-pointer text-xs ">
              Forgot password?
            </span>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f4514f] text-white py-3 rounded-md font-semibold hover:bg-[#e04341] disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
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
              <span className="text-blue-600  text-xs">
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
