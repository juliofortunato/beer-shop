"use client";

import clsx from "clsx";
import { useState } from "react";

const CATEGORIES_MOCK = ["All", "🍺 Beer", "🍷 Wine"];

export default function CategorySelector() {
  const [activeCategory, setActiveCategory] = useState<string>(
    CATEGORIES_MOCK[1]
  );

  function handleCategoryClick(nextCategoryIdx: number) {
    setActiveCategory(CATEGORIES_MOCK[nextCategoryIdx]);
  }

  return (
    <div className="flex items-center gap-4">
      {CATEGORIES_MOCK.map((category, idx) => {
        const classes = clsx("p-4 rounded-xl font-medium", {
          "bg-white": activeCategory !== category,
          "bg-primary text-white": activeCategory === category,
        });

        return (
          <button
            onClick={() => handleCategoryClick(idx)}
            key={idx}
            className={classes}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
