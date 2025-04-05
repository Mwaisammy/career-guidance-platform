import {
  ChartColumnStacked,
  LibraryBig,
  SearchIcon,
  Users,
} from "lucide-react";
import PromoCard from "./promocard";

const promos = [
  {
    id: 1,
    icon: <SearchIcon />,
    title: "Personalized assessment",
    description:
      "Discover careers that match your unique skills, interests, and values through our scientifically-backed assessment tools",
  },
  {
    id: 2,
    icon: <ChartColumnStacked />,
    title: "Career Insights",
    description:
      "Get data-driven information about salary ranges, job growth, required skills, and day-to-day responsibilities.",
  },
  {
    id: 3,
    icon: <LibraryBig />,
    title: "Learning Pathways",
    description:
      "Access customized learning plans that help you build the specific skills needed for your target career.",
  },
  {
    id: 4,
    icon: <Users />,
    title: "Professional Network",
    description:
      "Connect with mentors and professionals who can provide guidance and opportunities in your field of interest.",
  },
];

const Careers = () => {
  return (
    <div className="pt-[70px] ">
      <div className="flex flex-col text-center">
        <h2 className="text-3xl font-bold text-[#1e3b8b] capitalize">
          Your Career Journey Starts Here
        </h2>

        <p className="text-gray-600">
          PathFinder provides personalized guidance to help you explore, prepare
          for, and <br />
          succeed in your ideal career path.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-[40px] ">
        {promos.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  );
};

export default Careers;
