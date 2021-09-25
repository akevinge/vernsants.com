import { FC } from "react";
import { listings } from "lib/listings";

export const ShopListings: FC = () => {
  return (
    <div className="w-3/4 mx-auto flex justify-center">
      <ul className="list-none flex gap-12 flex-wrap justify-start px-14">
        {listings
          .sort((a, b) =>
            a.inStock && b.inStock ? 1 : a.inStock && !b.inStock ? -1 : 0
          )
          .map(({ imgUrl, species, genus, price, desc, extra, inStock }, i) => (
            <li
              id={genus + "-" + species}
              key={species + genus + imgUrl + i.toString()}
              className="flex flex-col gap-2"
            >
              <div className="w-72 flex justify-center items-center bg-primary-light">
                <img className="w-full" src={imgUrl} alt="" />
              </div>
              <h1 className="text-lg text-highlight font-medium">{`${genus} ${species}`}</h1>
              <h1 className="text-base text-secondary font-bold">{desc}</h1>
              <h1 className="text-base text-secondary font-bold">{`$${price}`}</h1>
              {extra && (
                <h1 className="text-sm text-red-500 font-bold">{`${extra}`}</h1>
              )}
              {inStock && (
                <h1 className="text-sm text-blue-500 font-bold">In Stock!</h1>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
