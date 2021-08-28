import { Navbar, NavbarPlaceholder } from "@components/shared/Navbar";
import { Footer } from "@components/shared/Footer";
import { ShopListings } from "@components/shop/ShopListings";
import { NextPage } from "next";

const ShopPage: NextPage = () => {
  return (
    <div className="page-container bg-primary w-screen h-screen">
      <Navbar />
      <NavbarPlaceholder />
      <div
        className="w-screen"
        style={{ minHeight: "300px", marginBottom: "13vh", marginTop: "12vh" }}
      >
        <ShopListings />
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
