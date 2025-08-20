"use client";

import { RegisterUser } from "@/app/actions/auth/RegisterUser";
import SocialLogin from "@/app/login/components/SocialLogin";

import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    RegisterUser({ name, email, password });
  };
  return (
    <div className="min-h-screen flex justify-center items-center  px-4">
      <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button className="w-full py-3 text-white bg-cyan-500 rounded-md font-semibold hover:bg-cyan-600 transition">
            Sign Up
          </button>
        </form>

        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-500">
            Sign up with social accounts
          </p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div>
          <SocialLogin />
        </div>

        <p className="text-xs text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
