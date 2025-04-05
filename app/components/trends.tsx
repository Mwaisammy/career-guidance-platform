import { MoveRight } from "lucide-react";
import React from "react";

type Props = {
  showAll: boolean;
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
};

const Trends = ({ showAll, setShowAll }: Props) => {
  return (
    <div className="cursor-pointer" onClick={() => setShowAll(!showAll)}>
      <div className="flex items-center justify-between gap-3 mt-3  text-[#1e3b8b] ">
        <h2 className="capitalize font-semibold">
          {showAll ? "Show less" : "View all careers"}
        </h2>
        <MoveRight className="size-4 mt-1" />
      </div>
    </div>
  );
};

export default Trends;
