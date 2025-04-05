"use client";
import React, { useState } from "react";
import PathCard from "./pathCard";
import Trends from "./trends";

const CareerPaths = () => {
  const [showAll, setShowAll] = useState(false);

  const careerPaths = [
    {
      id: 1,
      field: "Technology",
      speciality: "Data Scientist",
      salary: "$75k-$120k",
      growth: "22% Growth (Faster than average)",
      description:
        "Analyze complex data sets to identify trends and insights that drive business decisions.",
    },
    {
      id: 2,
      field: "HealthCare",
      speciality: "Physical Therapist",
      salary: "$65k-$95k",
      growth: "18% Growth (Faster than average)",
      description:
        "Help patients improve mobility and manage pain through therapeutic exercises and techniques.",
    },
    {
      id: 3,
      field: "Education",
      speciality: "Teacher",
      salary: "$55k-$85k",
      growth: "15% Growth (Faster than average)",
      description:
        "Instruct students in a variety of subjects and help them develop academic and social skills.",
    },
    {
      id: 4,
      field: "Education",
      speciality: "Teacher",
      salary: "$55k-$85k",
      growth: "15% Growth (Faster than average)",
      description:
        "Instruct students in a variety of subjects and help them develop academic and social skills.",
    },
    {
      id: 5,
      field: "Creative",
      speciality: "Graphic Designer",
      salary: "$55k-$85k",
      growth: "15% Growth (Faster than average)",
      description:
        "Create visual content to communicate messages through digital and print media.",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between ">
        <h2 className="text-4xl text-[#1e3b8b] font-semibold">
          Trending career paths
        </h2>

        <Trends showAll={showAll} setShowAll={setShowAll} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-[40px] ">
        {careerPaths.slice(0, showAll ? careerPaths.length : 3).map((path) => (
          <PathCard key={path.id} path={path} />
        ))}
      </div>
    </div>
  );
};

export default CareerPaths;
