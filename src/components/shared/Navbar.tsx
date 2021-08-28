import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "icons/MenuIcon";
import { useRouter } from "next/dist/client/router";
import { Routes } from "../../types/Routes";

export const NavbarPlaceholder = () => <div className="w-screen h-20"></div>;

export const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const switchMobileOpen = () => setMobileOpen((s) => !s);
  const [navIndx, setNavIndx] = useState(0);

  const { pathname } = useRouter();

  useEffect(
    () =>
      setNavIndx(
        pathname === Routes.shop
          ? 1
          : pathname === Routes.shippingAndDoa
          ? 3
          : 0
      ),
    [pathname]
  );

  return (
    <div
      className="w-screen h-20 bg-primary fixed top-0 left-0 grid items-center justify-items-start z-50"
      style={{ gridTemplateColumns: "4fr 5fr" }}
    >
      <Link href={Routes.home}>
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
        className="block sm:hidden fixed top-20 w-screen bg-primary transition-all duration-500 border-t-2 border-white"
        style={{
          transform: mobileOpen ? "translateX(0)" : "translateX(100vw)",
        }}
      >
        <div className="flex gap-6 p-5 justify-center items-center">
          <Link href={Routes.home}>
            <a
              className={`${
                navIndx === 0 ? "text-highlight" : "text-secondary"
              } font-primary font-medium text-sm whitespace-nowrap`}
            >
              Home
            </a>
          </Link>
          <Link href={Routes.shop}>
            <a
              className={`${
                navIndx === 2 ? "text-highlight" : "text-secondary"
              } font-primary font-medium text-sm whitespace-nowrap`}
            >
              Shop
            </a>
          </Link>
          <Link href={Routes.shippingAndDoa}>
            <a
              className={`${
                navIndx === 3 ? "text-highlight" : "text-secondary"
              } font-primary font-medium text-sm whitespace-nowrap`}
            >
              Shipping &#38; DoA
            </a>
          </Link>
        </div>
      </div>
      {/* large nav */}
      <div className="hidden sm:flex flex-col items-center">
        <div className="flex gap-16">
          <Link href={Routes.home}>
            <a
              className={`${
                navIndx === 0 ? "text-highlight" : "text-secondary"
              } font-primary font-medium text-base whitespace-nowrap`}
            >
              Home
            </a>
          </Link>
          <Link href={Routes.shop}>
            <a
              className={`${
                navIndx === 1 ? "text-highlight" : "text-secondary"
              } font-primary font-medium text-base whitespace-nowrap`}
            >
              Shop
            </a>
          </Link>
          <Link href={Routes.shippingAndDoa}>
            <a
              className={`${
                navIndx === 3 ? "text-highlight" : "text-secondary"
              } font-primary font-medium text-base whitespace-nowrap`}
            >
              Shipping &#38; DoA
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
