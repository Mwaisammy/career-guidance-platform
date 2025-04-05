"use client";
import { User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./navLinks";
import Responsive from "./responsive";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="flex flex-col justify-between shadow-2xl px-[2rem] p-4 ">
      {isLoggedIn ? (
        <div className="flex items-center justify-between  gap-4 ">
          <div className="text-lg font-bold text-[#1c3c8c]">
            <Link href="/">Career Guidance</Link>
          </div>
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <div className="hidden md:block">
            <User />
          </div>

          <div className="block mt-2 md:hidden">
            <Responsive />
          </div>
        </div>
      ) : (
        <div className="flex space-x-4">
          <a href="/login" className="hover:text-gray-300">
            Login
          </a>
          <a href="/register" className="hover:text-gray-300">
            Register
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
