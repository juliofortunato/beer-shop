"use client";

import { StockPrice } from "@/app/_data/stock-price";
import { usePolling } from "@/app/_hooks/use-polling";
import { useState } from "react";
import { ProductContext } from "./context";
import { ProductContextProviderProps } from "./types";

export default function ProductContextProvider({
  children,
  initialSKU,
}: ProductContextProviderProps) {
  const [activeSKU, setActiveSKU] = useState<string | undefined>(initialSKU);
  const { data } = usePolling<StockPrice>(`/stock-price/${activeSKU}`);

  function selectSKU(sku: string) {
    setActiveSKU(sku);
  }

  return (
    <ProductContext.Provider
      value={{ activeSKU, price: data?.price, stock: data?.stock, selectSKU }}
    >
      {children}
    </ProductContext.Provider>
  );
}
