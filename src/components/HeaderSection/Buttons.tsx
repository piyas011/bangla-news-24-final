"use client";

import Link from "next/link";
import { useState } from "react";

const SignUpLogInButton = () => {
  const [active, setActive] = useState("signup");

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <Link
        href="#"
        onClick={() => setActive("signin")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 sm:px-4 sm:py-2 ${
          active === "signin"
            ? "bg-red-600 text-white"
            : "bg-red-50 text-red-600 hover:bg-red-100"
        }`}
      >
        সাইন ইন
      </Link>

      <Link
        href="#"
        onClick={() => setActive("signup")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 sm:px-4 sm:py-2 ${
          active === "signup"
            ? "bg-red-600 text-white"
            : "bg-red-50 text-red-600 hover:bg-red-100"
        }`}
      >
        সাইন আপ
      </Link>
    </div>
  );
};

export default SignUpLogInButton;
