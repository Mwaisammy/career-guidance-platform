"use client";
import { usePathname } from "next/navigation";
import React from "react";
import NavRoutes from "./navRoutes";

const NavLinks = () => {
  const pathName = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathName === "/",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathName === "/dashboard",
    },
    {
      href: "/assessment",
      label: "Assessment",
      active: pathName === "/assessment",
    },
    {
      href: "/learning",
      label: "Learning",
      active: pathName === "/learning",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:gap-6">
      {routes.map((route) => (
        <NavRoutes
          key={route.href}
          active={route.active}
          href={route.href}
          label={route.label}
        />
      ))}
    </div>
  );
};

export default NavLinks;
