import { Navbar, NavbarPlaceholder } from "@components/shared/Navbar";
import { NextPage } from "next";
import { Footer } from "@components/shared/Footer";

const ShippingAndDoa: NextPage = () => {
  return (
    <div className="page-container bg-primary">
      <Navbar />
      <NavbarPlaceholder />

      <section className="w-5/6 mx-auto" style={{ marginTop: "8vh" }}>
        <h1 className="text-secondary text-2xl sm:text-4xl font-medium">
          Shipping Prices
        </h1>
        <div className="mt-8 flex flex-col gap-4">
          <span className="text-secondary font-medium">
            <span className="text-highlight">2-Day Priority: </span>+$10
          </span>
          <span className="text-secondary font-medium">
            <span className="text-highlight">Cooling Packs: </span>+$5
          </span>
          <span className="text-secondary font-medium">
            <span className="text-highlight">Insulated Boxes: </span>+$15
          </span>
          <span className="text-secondary font-medium">
            <span className="text-highlight">
              Overnight{" "}
              <u className="text-secondary text-xs">
                (Comes with cooling packs)
              </u>
              :
            </span>{" "}
            +$75
          </span>
        </div>
        <h1 className="mt-20 text-secondary text-2xl sm:text-4xl font-medium">
          Dead On Arrival Policy
        </h1>
        <div className="mt-8">
          <span className="text-secondary font-medium">
            Your colony will have{" "}
            <u className="font-bold text-highlight">
              guarenteed live arrival if overnight shipping
            </u>{" "}
            is paid for.
          </span>
        </div>
        <div
          className="mr-auto"
          style={{ marginTop: "15vh", display: "inline-block" }}
        >
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default ShippingAndDoa;
