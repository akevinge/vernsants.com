import { SearchAutoComplete } from "@components/shared/SearchAutoComplete";
import { SearchIcon } from "icons/SearchIcon";
import { FC } from "react";

// call to action
export const CtaCard: FC = () => {
  return (
    <div className="w-screen-5/6 h-72 xs:w-screen-5/6 xs:h-60 sm:w-96 sm:h-72 lg:h-80 lg:w-108 bg-primary">
      <div className="flex flex-col gap-10 justify-center p-8 lg:p-12">
        <h1 className="text-secondary text-2xl md:text-4xl ">
          Shop Vern's unqiue collection of ants
        </h1>
        <SearchAutoComplete />
      </div>
    </div>
  );
};
