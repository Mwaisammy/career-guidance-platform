import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Menu, User } from "lucide-react";
import NavLinks from "./navLinks";

const Responsive = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className={cn("block pt-3 px-3", matches && "hidden")}>
        <div>
          <User className="bg-blue-500 rounded-full p-3 text-white size-10" />
        </div>
        <NavLinks />
      </SheetContent>
    </Sheet>
  );
};

export default Responsive;
