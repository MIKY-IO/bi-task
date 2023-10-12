import { StaticImageData } from "next/image.js";
import {
  people1,
  people2,
  premium1,
  premium2,
  pets1,
  pets2,
  dog,
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
} from "@/public/pictures/products/index";
export const categories = [
  "people",
  "premium",
  "pets",
  "food",
  "landmarks",
  "cities",
  "nature",
];

export const nameSorter = (a: TProduct, b: TProduct) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const priceSorter = (a: TProduct, b: TProduct) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
};

export type TProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  bestseller?: boolean;
  featured?: boolean;
  details: string | null;
};

export const priceRanges: any = {
  price1: {
    min: 0,
    max: 20,
  },
  price2: {
    min: 20,
    max: 100,
  },
  price3: {
    min: 100,
    max: 200,
  },
  price4: {
    min: 200,
    max: null,
  },
};

export const productsData: TProduct[] = [
  {
    id: "1",
    name: "Pyro is not CRIME",
    category: "people",
    price: 3.89,
    currency: "USD",
    image: {
      src: people1,
      alt: "people foto",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: "2",
    name: "Where am I",
    category: "people",
    price: 100,
    currency: "USD",
    image: {
      src: people2,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    id: "3",
    name: "Colorful Art",
    category: "premium",
    price: 155,
    currency: "USD",
    image: {
      src: premium1,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: "4",
    name: "Colorful Yellow",
    category: "premium",
    price: 189,
    currency: "USD",
    image: {
      src: premium2,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: "5",
    name: "Where is Cat?",
    category: "pets",
    price: 55,
    currency: "USD",
    image: {
      src: pets1,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: "6",
    name: "Dog Mood",
    category: "pets",
    price: 66,
    currency: "USD",
    image: {
      src: pets2,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },

  {
    id: "7",
    name: "Egg Balloon",
    category: "food",
    price: 93.89,
    currency: "USD",
    image: {
      src: food1,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: "8",
    name: "Egg Tower",
    category: "food",
    price: 91.89,
    currency: "USD",
    image: {
      src: food2,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: "9",
    name: "Fruit Idea",
    category: "food",
    price: 89.89,
    currency: "USD",
    image: {
      src: food3,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: "10",
    name: "River-land",
    category: "landmarks",
    price: 99.99,
    currency: "USD",
    image: {
      src: landmarks1,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: "11",
    name: "Hill Šobes",
    category: "landmarks",
    price: 99.99,
    currency: "USD",
    image: {
      src: landmarks2,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: "12",
    name: "Prague City",
    category: "cities",
    price: 69.99,
    currency: "USD",
    image: {
      src: cities1,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: "13",
    name: "Znojmo town",
    category: "cities",
    price: 39.99,
    currency: "USD",
    image: {
      src: cities2,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },

  {
    id: "14",
    name: "Moravia town",
    category: "cities",
    price: 9.99,
    currency: "USD",
    image: {
      src: cities3,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },

  {
    id: "15",
    name: "Claudy Nature",
    category: "nature",
    price: 19.99,
    currency: "USD",
    image: {
      src: nature1,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: "16",
    name: "Smoky Mountain",
    category: "nature",
    price: 7.99,
    currency: "USD",
    image: {
      src: nature2,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: "17",
    name: "Samurai King Resting",
    category: "people",
    price: 10000,
    currency: "USD",
    image: {
      src: dog,
      alt: "people foto",
    },
    bestseller: true,
    featured: true,
    details: null,
  },
];
