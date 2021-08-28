import { FeaturedSalesList } from "@components/home/FeaturedSalesList";
import { Navbar, NavbarPlaceholder } from "@components/shared/Navbar";
import { NextPage } from "next";
import { WhySection } from "@components/home/WhySection";
import { Contact } from "@components/home/Contact";
import { Hero } from "@components/home/Hero";

const HomePage: NextPage = () => {
  return (
    <div className="page-container bg-primary">
      <Navbar />
      <NavbarPlaceholder />
      <Hero />
      <section className="w-full" style={{ marginTop: "35vh" }}>
        <div className="w-3/4 h-auto mx-auto -mt-10 relative">
          <div id="featured-sales" className="absolute -top-60"></div>
          <FeaturedSalesList />
        </div>
      </section>
      <section className="w-screen" style={{ marginTop: "35vh" }}>
        <WhySection />
      </section>
      <div style={{ marginTop: "35vh" }}>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
