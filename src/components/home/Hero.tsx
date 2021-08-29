import { Button } from "@components/shared/Button";
import { SpeciesList } from "@components/shared/SpeciesList";
import { FC } from "react";
import { Routes } from "../../types/Routes";

export const Hero: FC = () => {
  return (
    <section
      className="w-screen h-screen relative grid grid-rows-2 px-5"
      style={{ height: "calc(100vh - 5rem)", minHeight: "500px" }}
    >
      <div className="flex flex-col gap-5 sm:gap-16 items-center mt-screen-10vh sm:mt-screen-15vh">
        <h1 className="text-secondary text-3xl lg:text-4xl xl:text-6xl font-medium text-center">
          Shop <span className="text-highlight">Vern&apos;s</span> Unique
          Collection of Ants
        </h1>
        <div className="w-3/4 md:w-1/2 mx-auto">
          <SpeciesList />
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center self-end mb-12 sm:mb-28">
        <Button
          bgColor="highlight"
          link={Routes.shop}
          customDim="w-32 sm:w-52 h-12"
        >
          <h1 className="text-primary font-medium text-lg">Shop Now</h1>
        </Button>
        <Button
          bgColor="secondary-light"
          link="#featured-sales"
          customDim="w-60 sm:w-80 sm:w-96 h-12"
        >
          <h1 className="text-highlight font-medium text-sm  sm:text-lg whitespace-nowrap">
            Check out <span className="text-primary">Vern&apos;s</span> Hottest
            Sales
          </h1>
        </Button>
      </div>
    </section>
  );
};
