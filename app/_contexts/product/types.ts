import { ReactNode } from "react";

export interface ProductContextData {
  activeSKU?: string;
  price?: number;
  stock?: number;
  selectSKU?: (sku: string) => void;
}

export interface ProductContextProviderProps {
  children: ReactNode;
  initialSKU: string;
}
