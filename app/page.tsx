import { MenuIcon } from "lucide-react";
import Avatar from "./_components/avatar";
import Button from "./_components/button";
import SearchInput from "./_components/search-input";

const currentUser = {
  name: "Michael Scott",
};

export default function Home() {
  const userFirstName = currentUser.name.split(" ")[0];

  return (
    <main className="px-6 py-10 grid gap-6">
      <nav className="flex items-center justify-between">
        <Button>
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
    </main>
  );
}
