import { ArrowLeftIcon, EllipsisIcon } from "lucide-react";
import { ReactNode } from "react";
import Button from "../_components/button";

interface ProductLayoutProps {
  children: ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <main>
      <header className="px-6 pt-10 mb-1 flex items-center justify-between">
        <Button variant="icon">
          <ArrowLeftIcon />
        </Button>

        <p className="text-lg font-bold">Detail</p>

        <Button variant="icon" title="Coming soon..." disabled>
          <EllipsisIcon />
        </Button>
      </header>

      {children}
    </main>
  );
}
