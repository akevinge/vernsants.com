import { FC } from "react";
import { listings, sortListings } from "lib/listings";

export const ShopListings: FC = () => {
  return (
    <div className="w-3/4 mx-auto flex justify-center">
      <ul className="list-none flex gap-12 flex-wrap justify-start px-14">
        {sortListings(listings).map(
          (
            { imgUrl, species, genus, price, desc, extra, inStock, onSale },
            i
          ) => (
            <li
              id={genus + "-" + species}
              key={species + genus + imgUrl + i.toString()}
              className="flex flex-col gap-2"
            >
              <div className="w-72 flex justify-center items-center bg-primary-light">
                <img className="w-full" src={imgUrl} alt="" />
              </div>
              <h1 className="text-xl text-highlight font-medium">{`${genus} ${species}`}</h1>
              <h1 className="text-base text-secondary font-bold">{desc}</h1>
              <div className="flex gap-2">
                <h1
                  className={`text-base text-secondary font-bold ${
                    onSale && "line-through"
                  }`}
                >{`$${price}`}</h1>

                {onSale && (
                  <div className="relative">
                    <h1 className="text-3xl text-white font-bold">{`$${onSale}`}</h1>
                    <h1 className="text-sm whitespace-nowrap text-red-500 font-bold absolute top-0 -right-16">
                      ON SALE
                    </h1>
                  </div>
                )}
              </div>

              {extra && (
                <h1 className="text-sm text-red-500 font-bold">{`${extra}`}</h1>
              )}
              {inStock && (
                <h1 className="text-sm text-blue-500 font-bold">In Stock!</h1>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
