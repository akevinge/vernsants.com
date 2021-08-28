import { FC, Fragment } from "react";
import { listings } from "lib/listings";
import Link from "next/link";
import { Routes } from "../../types/Routes";

export const SpeciesList: FC = () => {
  return (
    <div className="w-full h-full">
      <ul className="list-none w-full h-auto transition-all flex flex-row gap-2 flex-wrap justify-center">
        {listings.map(({ genus, species }, i) => (
          <Fragment key={i}>
            <li className="flex items-center cursor-pointer">
              <Link href={`${Routes.shop}#${genus + "-" + species}`}>
                <span className="ml-2 text-secondary font-bold whitespace-nowrap text-xs sm:text-base">
                  {`${genus} ${species}`}
                </span>
              </Link>
            </li>
            <li className="flex items-center">
              <div className="bg-highlight w-1 h-1 rounded-full"></div>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
