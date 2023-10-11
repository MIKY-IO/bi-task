import { useEffect, useState } from "react";
import { Description, Hero, ProductSection } from "../components";
import { productsData } from "../data";
import type { TProduct } from "../data";
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSidePropsContext,
} from "next";

interface IProductProps {
  count: number;
  page: number;
  limit: number;
  skip: number;
  sortKey: string;
  products: Array<TProduct>;
  featured: TProduct;
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  let page = 1;
  if (query?.page) {
    page = Number(query.page);
  }
  let limit = 6;
  const queryLimit = Number(query.limit);
  const sortKey = String(query.sortKey);
  if (queryLimit && queryLimit >= 6 && queryLimit <= 12) {
    limit = queryLimit;
  }
  const sortKeys = ["price", "title", "createdAt"];
  let sortKeyString = "createdAt";
  if (query.sortKey && sortKeys.includes(sortKey)) {
    sortKeyString = sortKey;
  }
  const skip = (page - 1) * limit;
  const newProducts = productsData.slice(skip, page * limit);

  let featured = productsData.find((item) => item?.featured);
  if (!featured) {
    featured = productsData[0];
  }
  console.log(page, limit, skip, sortKeyString);
  return {
    props: {
      count: productsData.length,
      page: Number(page),
      limit,
      skip,
      sortKey: sortKeyString,
      products: newProducts,
      featured,
    },
  };
}

const HomePage = (props: IProductProps) => {
  const { featured } = props;

  const [fetchedProducts, setFetchedProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    console.log("props", props);
    setFetchedProducts(props.products);
  }, [props]);

  return (
    <main className="mx-auto max-w-screen-xl md:h-full">
      <section className="">
        <Hero featured={featured} />
      </section>
      <section className="">
        <Description />
      </section>
      <section className="">
        <ProductSection
          products={fetchedProducts}
          count={props.count}
          page={props.page}
          limit={props.limit}
        />
      </section>
    </main>
  );
};

export default HomePage;
