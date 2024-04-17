import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 w-full px-8 py-4 bg-white flex items-center justify-between shadow-nav md:hidden">
      <button className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/10">
        <Image
          className="w-5 h-5 flex items-center justify-center"
          src="/icons/home.svg"
          width={20}
          height={20}
          alt="Home"
        />
      </button>

      <button
        className="w-11 h-11 flex items-center justify-center"
        disabled
        title="Coming soon..."
      >
        <Image
          className="w-5 h-5"
          src="/icons/checkout.svg"
          width={20}
          height={20}
          alt="Checkout"
        />
      </button>

      <button
        className="w-11 h-11 flex items-center justify-center"
        disabled
        title="Coming soon..."
      >
        <Image
          className="w-5 h-5"
          src="/icons/bag.svg"
          width={20}
          height={20}
          alt="Cart"
        />
      </button>

      <button
        className="w-11 h-11 flex items-center justify-center"
        disabled
        title="Coming soon..."
      >
        <Image
          className="w-5 h-5"
          src="/icons/settings.svg"
          width={20}
          height={20}
          alt="Settings"
        />
      </button>
    </nav>
  );
}
