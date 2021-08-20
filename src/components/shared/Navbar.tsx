import { FC } from "react";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <div
      className="w-screen bg-black bg-opacity-30 fixed top-0 left-0 grid items-center justify-items-start"
      style={{ height: "85px", gridTemplateColumns: "4fr 5fr" }}
    >
      <Link href="/">
        <a className="text-secondary font-primary font-medium text-base ml-10 whitespace-nowrap">
          Vern's Ant Shop
        </a>
      </Link>
      <div className="flex flex-col items-center self-end mb-6">
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
