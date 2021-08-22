import { CubeIcon } from "icons/CubeIcon";
import { DollarCoinIcons } from "icons/DollarCoinIcon";
import { FC } from "react";

export const WhySection: FC = () => {
  return (
    <div className="w-3/4 mx-auto flex flex-col items-center xl:items-start xl:flex-row justify-around gap-5">
      <div className="flex flex-col gap-10 justify-center items-center xl:items-start">
        <h1 className="text-secondary font-medium text-5xl">
          Why buy from Vern?
        </h1>
        <ul className="w-full xl:w-2/3 list-none flex flex-col gap-5">
          <li className="flex gap-4 items-center relative">
            <DollarCoinIcons customTwClass="filter invert" />
            <h1 className="text-secondary text-2xl whitespace-normal xs:whitespace-nowrap">
              The <u>Cheapest</u> Prices in Texas
            </h1>
          </li>
          <li className="flex gap-4 items-center">
            <CubeIcon customTwClass="filter invert" />
            <h1 className="text-secondary text-2xl whitespace-normal xs:whitespace-nowrap">
              Reliable shipping
            </h1>
          </li>
          <li className="flex gap-4 items-center">
            <CubeIcon customTwClass="filter invert" />
            <h1 className="text-secondary text-2xl whitespace-normal xs:whitespace-nowrapz">
              Fast Customer Service
            </h1>
          </li>
        </ul>
      </div>
      <img src="/images/why.jpg" alt="" />
    </div>
  );
};
