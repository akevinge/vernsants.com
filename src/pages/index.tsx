import { Navbar } from "@components/shared/Navbar";
import { NextPage } from "next";
import { FancyChevron } from "../icons/FancyChevron";

const HomePage: NextPage = () => {
  return (
    <div className="page-container bg-primary">
      <Navbar />
      <section className="max-h-screen">
        <div className="bg-hero-bg max-w-screen min-h-screen bg-cover bg-center"></div>
        <div className="absolute bottom-10 left-1/2 translate-x-1/2 animate-bounce cursor-pointer">
          <FancyChevron />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
