"use client";

import clsx from "clsx";
import { MouseEvent, useState } from "react";

interface SizeSelectorProps {
  sizes: string[];
}

export default function SizeSelector({ sizes }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);

  function handleChangeSelectedSize(e: MouseEvent<HTMLButtonElement>) {
    setSelectedSize(e.currentTarget.innerText);
  }

  return (
    <div className="flex items-center gap-4 overflow-x-auto">
      {sizes.map((size, idx) => {
        const classes = clsx(
          "rounded-full px-4 py-2 text-sm border text-nowrap",
          {
            "border-dusty-gray text-dusty-gray": selectedSize !== size,
            "border-primary text-primary": selectedSize === size,
          }
        );
        return (
          <button
            className={classes}
            key={idx}
            onClick={handleChangeSelectedSize}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
