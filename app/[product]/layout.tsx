import { ReactNode } from "react";
import ProductHeader from "./_components/product-header";

interface ProductLayoutProps {
  children: ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <main>
      <ProductHeader />

      {children}
    </main>
  );
}
