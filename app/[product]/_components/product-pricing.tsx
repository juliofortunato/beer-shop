"use client";

import { ProductContext } from "@/app/_contexts/product/context";
import { Product } from "@/app/_data/products";
import formatCurrency from "@/app/_helpers/format-currency";
import { useContext } from "react";

interface ProductPricingProps {
  product: Product;
}

export default function ProductPricing({ product }: ProductPricingProps) {
  const { stock, price } = useContext(ProductContext);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{product.brand}</h1>
        <span className="text-2xl font-bold text-primary">
          {formatCurrency(price || 0)}
        </span>
      </div>
      <p className="text-sm text-dusty-gray">
        Origin: {product.origin} | Stock: {stock}
      </p>
    </div>
  );
}
