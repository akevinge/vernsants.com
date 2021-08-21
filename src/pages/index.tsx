import { CtaCard } from "@components/home/CtaCard";
import { Navbar } from "@components/shared/Navbar";
import { NextPage } from "next";
import { FancyChevronIcon } from "../icons/FancyChevronIcon";

const HomePage: NextPage = () => {
  return (
    <div className="page-container bg-primary">
      <Navbar />
      <div
        className="bg-hero-bg max-w-screen bg-cover bg-center"
        style={{ height: "108vh" }}
      ></div>
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform translate-x-1/2 animate-bounce cursor-pointer">
        <FancyChevronIcon />
      </div>
      <div className="absolute transform top-1/2 -translate-y-2/3 left-1/2 md:left-20 -translate-x-1/2 md:translate-x-0 ">
        <CtaCard />
      </div>
    </div>
  );
};

export default HomePage;
