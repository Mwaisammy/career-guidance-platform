import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col justify-between shadow-2xl">
      <div className="flex justify-between items-center px-4 py-2  text-white">
        <div className="text-lg font-bold">Career Finder</div>

        {isLoggedIn ? (
          <div></div>
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

      <div className="">
        <div>
          <h1>Discover Your Perfect Career Path</h1>
          <p>
            Explore thousands of job opportunities tailored to your skills and
            talents
          </p>
        </div>

        <div>
          <Button className="bg-primary">Take accessment course</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
