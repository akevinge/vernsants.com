import { Navbar, NavbarPlaceholder } from "@components/shared/Navbar";
import { ShopFooter } from "@components/shop/ShopFooter";
import { ShopListings } from "@components/shop/ShopListings";
import { NextPage } from "next";

const ShopPage: NextPage = () => {
  return (
    <div className="page-container bg-primary w-screen h-screen">
      <Navbar />
      <NavbarPlaceholder />
      <div
        className="w-screen"
        style={{ minHeight: "300px", marginBottom: "10vh", marginTop: "10vh" }}
      >
        <ShopListings />
      </div>
      <ShopFooter />
    </div>
  );
};

export default ShopPage;
