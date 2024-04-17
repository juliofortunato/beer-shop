import { MenuIcon } from "lucide-react";
import Avatar from "./_components/avatar";
import Button from "./_components/button";
import CategorySelector from "./_components/category-selector";
import ProductList from "./_components/product-list";
import SearchInput from "./_components/search-input";

const currentUser = {
  name: "Michael Scott",
};

export default function Home() {
  const userFirstName = currentUser.name.split(" ")[0];

  return (
    <main className="px-6 py-10 grid gap-6">
      <nav className="flex items-center justify-between">
        <Button variant="icon">
          <MenuIcon />
        </Button>
        <button>
          <Avatar name={currentUser.name} />
        </button>
      </nav>

      <header>
        <p className="text-dove-gray leading-5">Hi Mr. {userFirstName},</p>
        <h1 className="font-bold text-2xl leading-8">Welcome Back!</h1>
      </header>

      <SearchInput />

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Drink Category</h2>
          <button className="text-sm text-silver">See All</button>
        </div>
        <CategorySelector />
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Popular</h2>
          <button className="text-sm text-silver">See All</button>
        </div>
        <ProductList />
      </section>
    </main>
  );
}
