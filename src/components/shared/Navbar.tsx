import { FC, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "icons/MenuIcon";

export const NavbarPlaceholder = () => <div className="w-screen h-20"></div>;

export const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const switchMobileOpen = () => setMobileOpen((s) => !s);

  return (
    <div
      className="w-screen h-20 bg-black bg-opacity-30 fixed top-0 left-0 grid items-center justify-items-start z-50"
      style={{ gridTemplateColumns: "4fr 5fr" }}
    >
      <Link href="/">
        <a className="text-secondary font-primary font-medium text-base ml-10 whitespace-nowrap">
          Vern&apos;s Ant Shop
        </a>
      </Link>
      {/* small nav */}
      <div
        className="block sm:hidden justify-self-end mr-10"
        onClick={switchMobileOpen}
      >
        <MenuIcon customTwClass="filter invert hover:invert-3/4 cursor-pointer" />
      </div>
      <div
        className="block sm:hidden fixed top-20 w-screen bg-black bg-opacity-30 transition-all duration-500 border-t-2 border-white"
        style={{
          transform: mobileOpen ? "translateX(0)" : "translateX(100vw)",
        }}
      >
        <div className="flex gap-16 p-5 justify-center items-center">
          <Link href="/">
            <a className="text-secondary font-primary font-medium text-base whitespace-nowrap">
              Home
            </a>
          </Link>
          <Link href="/shop">
            <a className="text-secondary font-primary font-medium text-base whitespace-nowrap">
              Shop
            </a>
          </Link>
        </div>
      </div>
      {/* large nav */}
      <div className="hidden sm:flex flex-col items-center self-end mb-6">
        <div className="flex gap-16">
          <Link href="/">
            <a className="text-secondary font-primary font-medium text-base whitespace-nowrap">
              Home
            </a>
          </Link>
          <Link href="/shop">
            <a className="text-secondary font-primary font-medium text-base whitespace-nowrap">
              Shop
            </a>
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="115"
          height="6"
          fill="none"
          viewBox="0 0 121 6"
        >
          <circle cx="3.074" cy="3" r="2.5" fill="#fff"></circle>
          <circle cx="3.074" cy="3" r="2.5" fill="#fff"></circle>
          <circle cx="3.074" cy="3" r="2.5" fill="#fff"></circle>
          <circle cx="3.074" cy="3" r="2.5" fill="#fff"></circle>
          <circle cx="117.926" cy="3" r="2.5" fill="#fff"></circle>
          <circle cx="117.926" cy="3" r="2.5" fill="#fff"></circle>
          <circle cx="117.926" cy="3" r="2.5" fill="#fff"></circle>
          <circle cx="117.926" cy="3" r="2.5" fill="#fff"></circle>
          <path stroke="#fff" strokeWidth="0.5" d="M2.378 3h115.459"></path>
        </svg>
      </div>
    </div>
  );
};
