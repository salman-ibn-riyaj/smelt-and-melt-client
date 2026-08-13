"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

export default function SignInPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: signInError } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (signInError) {
        setError(signInError.message || "Invalid email or password.");
      } else {
        toast.success("Logged in successfully!");
        
        // Brief delay so user sees the toast before navigating
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 1200);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // Redirect to home page
      });
    } catch (err) {
      setError("Failed to initiate Google sign-in.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4 py-12 text-zinc-100">
      <div className="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-md p-6">
        {/* Header */}
        <div className="flex flex-col gap-1 items-center pb-4 text-center">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Welcome Back
          </h1>
          <p className="text-sm text-zinc-400">
            Sign in to access your account
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Error Message */}
          {error && (
            <div className="p-3 text-xs rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-300">
                Email Address
              </label>
              <div className="relative flex items-center">
                <FiMail className="absolute left-3 text-zinc-400 text-lg" />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-zinc-300">
                  Password
                </label>
              </div>
              <div className="relative flex items-center">
                <FiLock className="absolute left-3 text-zinc-400 text-lg" />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl py-2.5 pl-10 pr-10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-zinc-400 hover:text-white transition-colors"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full font-semibold bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black py-2.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-[1px] bg-zinc-800" />
            <span className="text-xs text-zinc-500 uppercase tracking-wider">
              OR
            </span>
            <div className="flex-1 h-[1px] bg-zinc-800" />
          </div>

          {/* Google Sign In Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <FcGoogle size={20} /> Continue with Google
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-2">
            <p className="text-xs text-zinc-400">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-amber-500 hover:underline font-medium transition-colors"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}