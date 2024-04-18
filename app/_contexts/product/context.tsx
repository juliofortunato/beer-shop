"use client";

import { createContext } from "react";
import { ProductContextData } from "./types";

export const ProductContext = createContext<ProductContextData>({
  activeSKU: undefined,
  price: undefined,
  stock: undefined,
  selectSKU: undefined,
});
