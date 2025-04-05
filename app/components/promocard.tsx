import { Card } from "@/components/ui/card";
import React from "react";

type Props = {
  promo: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode; // Updated type here
  };
};

const PromoCard = ({ promo }: Props) => {
  return (
    <Card className="p-4 flex flex-col items-center justify-center text-center space-y-[40px] h-[300px]">
      <div>
        <div className="flex flex-col items-center space-y-[20px]   h-full">
          <p className="rounded-full bg-gray-900 text-white p-4 ">
            {promo.icon}
          </p>
          <h3 className="font-bold text-xl">{promo.title}</h3>
          <p className="text-gray-500 text-sm">{promo.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default PromoCard;
