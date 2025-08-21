"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    // Only run for social logins
    if (
      session?.status === "authenticated" &&
      session?.data?.user?.provider !== "credentials"
    ) {
      router.push("/products");
      toast.success("Successfully logged in");
    }
  }, [session?.status]);

  return (
    <button
      onClick={() => signIn("google")}
      aria-label="Log in with Google"
      className="relative w-full py-6 bg-green-500 hover:bg-green-600 rounded-md"
    >
      {/* Centered icon */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 "
        >
          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
        </svg>
      </div>
    </button>
  );
};

export default SocialLogin;
