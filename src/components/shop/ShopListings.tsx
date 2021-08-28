import { FC } from "react";

export const ShopListings: FC = () => {
  const placeholderData: {
    species: string;
    genus: string;
    imgUrl: string;
  }[] = [
    {
      species: "rugosus",
      genus: "Pogonomyrmex",
      imgUrl: "https://i.imgur.com/YpUp2db.jpg",
    },

    {
      species: "rugosus",
      genus: "Pogonomyrmex",
      imgUrl: "https://i.imgur.com/YpUp2db.jpg",
    },
    {
      species: "rugosus",
      genus: "Pogonomyrmex",
      imgUrl: "https://i.imgur.com/YpUp2db.jpg",
    },

    {
      species: "rugosus",
      genus: "Pogonomyrmex",
      imgUrl: "https://i.imgur.com/YpUp2db.jpg",
    },

    {
      species: "rugosus",
      genus: "Pogonomyrmex",
      imgUrl: "https://i.imgur.com/YpUp2db.jpg",
    },

    {
      species: "rugosus",
      genus: "Pogonomyrmex",
      imgUrl: "https://i.imgur.com/YpUp2db.jpg",
    },
  ];
  return (
    <div className="w-full">
      <ul className="list-none flex gap-10 flex-wrap justify-center px-20">
        {placeholderData.map(({ imgUrl, species, genus }, i) => (
          <li
            key={species + genus + imgUrl + i.toString()}
            className="flex flex-col gap-3"
          >
            <div className="w-44 rounded-sm overflow-hidden">
              <img className="w-full" src={imgUrl} alt="" />
            </div>
            <h1 className="text-sm text-highlight font-medium">{`${genus} ${species}`}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
