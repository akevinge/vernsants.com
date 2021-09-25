export const listings: {
  species: string;
  genus: string;
  // all images are 210x280 px
  imgUrl: string;
  price: number;
  desc: string;
  // extra ex: Available Soon!
  extra?: string;
  inStock?: boolean;
}[] = [
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
    species: "californicus",
    imgUrl: "https://i.imgur.com/lLHG9sh.jpg",
    price: 40,
    desc: "1-10 workers",
    inStock: true,
  },
];
