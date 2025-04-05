import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import React from "react";

type Props = {
  path: {
    field: string;
    speciality: string;
    salary: string;
    growth: string;
    description: string;
  };
};

const Pathdiv = ({
  path: { field, speciality, salary, growth, description },
}: Props) => {
  return (
    <div className="flex  overflow-hidden flex-col rounded-xl shadow-md h-[250px]">
      <div className="flex justify-between items-center text-white bg-[#1e3b8b] px-4 py-2 ">
        <span>{field}</span>
        <span className="bg-[rgba(152,157,183,0.3)] backdrop-blur-sm   rounded-sm p-1 uppercase">
          {salary}
        </span>
      </div>
      <div className="p-[20px] pb-[20px]">
        <h1 className="text-xl font-semibold mb-2">{speciality}</h1>

        <span className="text-emerald-600 flex items-center gap-x-1 ">
          <MoveUpRight className="size-3" />
          <h4 className="text-sm">{growth}</h4>
        </span>
        <p className="mt-4 text-gray-600 text-sm">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <Button className="bg-yellow-600">Explore career</Button>
          <Button variant={"outline"} className="border border-[#1e3b8b]">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pathdiv;
