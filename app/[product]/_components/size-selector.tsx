"use client";

import { ProductContext } from "@/app/_contexts/product/context";
import { Product } from "@/app/_data/products";
import clsx from "clsx";
import { useContext } from "react";

interface SizeSelectorProps {
  product: Product;
}

export default function SizeSelector({ product }: SizeSelectorProps) {
  const { activeSKU, selectSKU } = useContext(ProductContext);

  const handleChangeSelectedSize = (sku: string) => {
    return () => selectSKU?.(sku);
  };

  return (
    <div className="flex items-center gap-4 overflow-x-auto">
      {product.skus.map((sku, idx) => {
        const classes = clsx(
          "rounded-full px-4 py-2 text-sm border text-nowrap",
          {
            "border-dusty-gray text-dusty-gray": activeSKU !== sku.code,
            "border-primary text-primary": activeSKU === sku.code,
          }
        );
        return (
          <button
            className={classes}
            key={idx}
            onClick={handleChangeSelectedSize(sku.code)}
          >
            {sku.name}
          </button>
        );
      })}
    </div>
  );
}
