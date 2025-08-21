"use client";

import { RegisterUser } from "@/app/actions/auth/RegisterUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import { signIn } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await RegisterUser({ name, email, password });

      if (res?.insertedId) {
        toast.success("Registered successfully");
        router.push("/products");

        // // Auto login
        // const loginResponse = await signIn("credentials", {
        //   email,
        //   password,
        //   redirect: false,
        // });

        // if (loginResponse?.ok) {
        //   router.push("/products"); // Redirect to products page
        //   e.target.reset();
        // } else {
        //   toast.error("Login failed after registration");
        // }
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    }
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
          <SocialLogin></SocialLogin>
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
