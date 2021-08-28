import { Button } from "@components/shared/Button";
import { FC } from "react";
import { Routes } from "types/routes";

export const WhySection: FC = () => {
  return (
    <div className="w-full mx-auto flex justify-center">
      <div className="w-3/4 flex flex-col md:grid md:grid-cols-2 gap-20 md:gap-10 items-center md:items-start">
        <h1 className="text-secondary font-medium text-5xl xl:text-6xl">
          Why buy from <span className="text-highlight">Vern</span>?
        </h1>
        <ul className="list-none flex flex-col gap-20">
          <li>
            <h1 className="text-secondary text-3xl whitespace-normal xl:whitespace-nowrap">
              The <strong className="text-highlight">CHEAPEST PRICES</strong> in
              Texas
            </h1>
          </li>
          <li>
            <h1 className="text-secondary text-3xl whitespace-normal xl:whitespace-nowrap">
              The most{" "}
              <strong className="text-highlight">RELIABLE SHIPPING</strong> in
              Texas
            </h1>
          </li>
          <li>
            <h1 className="text-secondary text-3xl whitespace-normal xl:whitespace-nowrap">
              The <strong className="text-highlight">MOST CHOICES</strong> in
              Texas
            </h1>
          </li>
        </ul>
        <div></div>
        <Button
          bgColor="secondary"
          customTwClass="-mt-16 md:mt-0"
          link={Routes.shop}
        >
          <h1 className="text-primary font-medium text-lg">Shop Now</h1>
        </Button>
      </div>
    </div>
  );
};
