"use client";

import Button from "@/app/_components/button";
import { ArrowLeftIcon, EllipsisIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductHeader() {
  const router = useRouter();

  function handleBackClick() {
    router.back();
  }

  return (
    <header className="px-6 pt-10 mb-1 flex items-center justify-between">
      <Button variant="icon" onClick={handleBackClick}>
        <ArrowLeftIcon />
      </Button>

      <p className="text-lg font-bold">Detail</p>

      <Button variant="icon" title="Coming soon..." disabled>
        <EllipsisIcon />
      </Button>
    </header>
  );
}
