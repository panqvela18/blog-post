"use client";

import { useState } from "react";
import Category from "./Category";
import { BsBuildingsFill, BsFillRocketTakeoffFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";

export type CategoryType = "Business" | "Startup" | "Economy" | "Technology";

export default function CategoriesDetailed() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("Business");

  return (
    <div className="flex items-baseline justify-between">
      <div onClick={() => setSelectedCategory((prev) => "Business")}>
        <Category
          Icon={BsBuildingsFill}
          title="Business"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          selectedCategory={selectedCategory}
        />
      </div>
      <div onClick={() => setSelectedCategory((prev) => "Startup")}>
        <Category
          Icon={BsFillRocketTakeoffFill}
          title="Startup"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          selectedCategory={selectedCategory}
        />
      </div>
      <div onClick={() => setSelectedCategory((prev) => "Economy")}>
        <Category
          Icon={GoGraph}
          title="Economy"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          selectedCategory={selectedCategory}
        />
      </div>
      <div onClick={() => setSelectedCategory((prev) => "Technology")}>
        <Category
          Icon={GrTechnology}
          title="Technology"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
