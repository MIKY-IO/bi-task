import {
  people1,
  people2,
  premium1,
  premium2,
  pets1,
  pets2,
  food1,
  food2,
  food3,
  landmarks1,
  landmarks2,
  cities1,
  cities2,
  cities3,
  nature1,
  nature2,
} from "../public/pictures/products/index.js";

export const products = [
  {
    name: "Red Bench",
    category: "people",
    price: 3.89,
    currency: "USD",
    image: {
      src: { people1 },
      alt: "people foto",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Man",
    category: "people",
    price: 100,
    currency: "USD",
    image: {
      src: { people2 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Colorful",
    category: "premium",
    price: 155,
    currency: "USD",
    image: {
      src: { premium1 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Colorfu Yellow",
    category: "premium",
    price: 189,
    currency: "USD",
    image: {
      src: { premium2 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Cat",
    category: "pets",
    price: 55,
    currency: "USD",
    image: {
      src: { pets1 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Dog",
    category: "pets",
    price: 66,
    currency: "USD",
    image: {
      src: { pets2 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    name: "Egg Balloon",
    category: "food",
    price: 93.89,
    currency: "USD",
    image: {
      src: { food1 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Egg tower",
    category: "food",
    price: 91.89,
    currency: "USD",
    image: {
      src: { food2 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    name: "Fruit",
    category: "food",
    price: 89.89,
    currency: "USD",
    image: {
      src: { food3 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    name: "River",
    category: "landmarks",
    price: 99.99,
    currency: "USD",
    image: {
      src: { landmarks1 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    name: "Hill",
    category: "landmarks",
    price: 99.99,
    currency: "USD",
    image: {
      src: { landmarks2 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    name: "Prague",
    category: "cities",
    price: 69.99,
    currency: "USD",
    image: {
      src: { cities1 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    name: "Znojmo",
    category: "cities",
    price: 39.99,
    currency: "USD",
    image: {
      src: { cities2 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    name: "Moravia",
    category: "cities",
    price: 9.99,
    currency: "USD",
    image: {
      src: { cities3 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    name: "Claudy",
    category: "nature",
    price: 19.99,
    currency: "USD",
    image: {
      src: { nature1 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    name: "Mountain",
    category: "nature",
    price: 7.99,
    currency: "USD",
    image: {
      src: { nature2 },
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  // {
  //   name: "Samurai King Restling",
  //   category: "landmarks",
  //   price: 101,
  //   currency: "USD",
  //   image: {
  //     src: "",
  //     alt: "",
  //   },

  //   bestseller: false,
  //   featured: true,
  //   details: {
  //     dimmentions: {
  //       width: 1020,
  //       height: 1020,
  //     },
  //     size: 15000,
  //     description:
  //       "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
  //     recommendations: [
  //       {
  //         src: "",
  //         alt: "",
  //       },
  //       {
  //         src: "",
  //         alt: "",
  //       },
  //       {
  //         src: "",
  //         alt: "",
  //       },
  //     ],
  //   },
  // },
];
