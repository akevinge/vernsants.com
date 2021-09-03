type Listing = {
  species: string;
  genus: string;
  // all images are 210x280 px
  imgUrl: string;
  price: number;
  desc: string;
  // extra ex: Available Soon!
  extra?: string;
  inStock?: boolean;
  onSale?: number;
};

export const sortListings = (listings: Listing[]) => {
  return listings.sort((a, b) =>
    !a.onSale && !b.onSale
      ? a.inStock && b.inStock
        ? 1
        : a.inStock && !b.inStock
        ? -1
        : 0
      : a.onSale && b.onSale
      ? b.onSale - a.onSale
      : a.onSale
      ? -1
      : 1
  );
};

export const listings: Listing[] = [
  {
    genus: "Myrmecocystus",
    species: "navajo",
    imgUrl: "https://i.imgur.com/SaAE4UB.jpg",
    price: 80,
    desc: "1-10 workers",
    extra: "Available Soon!",
    inStock: false,
  },
  {
    genus: "Myrmecocystus",
    species: "mendax",
    imgUrl: "https://i.imgur.com/bzTJLfZ.jpg",
    price: 110,
    desc: "1-10 workers",
    extra: "Available Soon!",
    inStock: false,
  },
  {
    genus: "Myrmecocystus",
    species: "mimicus",
    imgUrl: "https://i.imgur.com/T68idFz.jpg",
    price: 70,
    desc: "1-10 workers",
    extra: "Available Soon!",
    inStock: false,
  },
  {
    genus: "Pogonomyrmex",
    species: "barbatus",
    imgUrl: "https://i.imgur.com/E1nIUFp.png",
    price: 55,
    desc: "1-10 workers",
    inStock: true,
  },
  {
    genus: "Pogonomyrmex",
    species: "rugosus",
    imgUrl: "https://i.imgur.com/YpUp2db.jpg",
    price: 45,
    desc: "1-10 workers",
    inStock: true,
  },
  {
    genus: "Pogonomyrmex",
    species: "subnitidus",
    imgUrl: "https://i.imgur.com/lLHG9sh.jpg",
    price: 40,
    desc: "1-10 workers",
    inStock: true,
  },
].map(({ genus, inStock, ...l }) => ({
  inStock: genus === "Pogonomyrmex" ? false : inStock,
  ...(genus === "Pogonomyrmex" && { onSale: 30 }),
  genus,
  ...l,
}));
