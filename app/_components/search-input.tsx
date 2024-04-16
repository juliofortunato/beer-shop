import { SearchIcon } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl">
      <SearchIcon className="text-silver" />
      <input
        className="h-full w-full text-silver text-sm outline-none"
        type="text"
        placeholder="Search burger, pizza, drink or etc..."
      />
    </div>
  );
}
