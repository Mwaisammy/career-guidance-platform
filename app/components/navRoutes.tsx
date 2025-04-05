import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  label: string;
  active?: boolean;
};

const MainRoutes = ({ href, label, active }: Props) => {
  return (
    <div>
      <Link
        href={href}
        className={`inline-flex px-4 py-2 transition-all .3s ease-in-out ${
          active
            ? "border-b-2 border-b-[#1c3c8c] font-medium text-[#1c3c8c] tracking-wide"
            : "font-normal"
        }`}
      >
        <h4 className="">{label}</h4>
      </Link>
    </div>
  );
};

export default MainRoutes;
