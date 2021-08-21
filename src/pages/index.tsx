import { CtaCard } from "@components/home/CtaCard";
import { FeaturedSalesList } from "@components/home/FeaturedSalesList";
import { Navbar } from "@components/shared/Navbar";
import { NextPage } from "next";
import { FancyChevronIcon } from "../icons/FancyChevronIcon";
import Link from "next/link";
import { WhySection } from "@components/home/WhySection";

const HomePage: NextPage = () => {
  return (
    <div className="page-container bg-primary">
      <Navbar />
      <div
        className="bg-hero-bg max-w-screen bg-cover bg-center"
        style={{ height: "108vh" }}
      ></div>
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform translate-x-1/2 animate-bounce cursor-pointer">
        <Link href="#featured-sales">
          <a>
            <FancyChevronIcon />
          </a>
        </Link>
      </div>
      <div className="absolute transform top-1/2 -translate-y-2/3 left-1/2 md:left-28 -translate-x-1/2 md:translate-x-0 ">
        <CtaCard />
      </div>
      <section className="w-full">
        <div className="w-3/4 h-auto mx-auto -mt-10 relative">
          <div id="featured-sales" className="absolute -top-60"></div>
          <FeaturedSalesList />
        </div>
      </section>
      <WhySection />
    </div>
  );
};

export default HomePage;
