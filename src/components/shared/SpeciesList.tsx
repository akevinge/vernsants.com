import { FC } from "react";

export const SpeciesList: FC = () => {
  const placeholderResults = [
    "Pogonomyrmex rugosus",
    "Pogonomyrmex rugosus",
    "Pogonomyrmex rugosus",
    "Pogonomyrmex rugosus",
    "Pogonomyrmex rugosus",
    "Pogonomyrmex rugosus",
  ];

  return (
    <div className="w-full h-full">
      <ul className="list-none w-full h-auto transition-all flex flex-row gap-2 flex-wrap justify-center">
        {placeholderResults.map((x, i) => (
          <>
            <li key={x} className="flex items-center">
              <span className="ml-2 text-secondary font-bold whitespace-nowrap text-xs sm:text-base">
                {x}
              </span>
            </li>
            <li key={x} className="flex items-center">
              <div className="bg-highlight w-1 h-1 rounded-full"></div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};
