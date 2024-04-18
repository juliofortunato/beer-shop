import { MenuIcon } from "lucide-react";
import Avatar from "./_components/avatar";
import Button from "./_components/button";
import CategorySelector from "./_components/category-selector";
import Navigation from "./_components/navigation";
import ProductList from "./_components/product-list";
import SearchInput from "./_components/search-input";
import { environment } from "./_helpers/environment";

const currentUser = {
  name: "Michael Scott",
};

export default async function Home() {
  const userFirstName = currentUser.name.split(" ")[0];
  const { apiBaseUrl } = environment;

  const { data: products } = await (
    await fetch(`${apiBaseUrl}/product`)
  ).json();

  return (
    <>
      <main className="px-6 pt-10 pb-28 grid gap-6">
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
            <button className="text-sm text-silver md:hidden">See All</button>
          </div>
          <CategorySelector />
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Popular</h2>
            <button className="text-sm text-silver md:hidden">See All</button>
          </div>
          <ProductList products={products} />
        </section>
      </main>

      <Navigation />
    </>
  );
}
