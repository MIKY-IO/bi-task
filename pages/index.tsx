import { useEffect, useState } from "react";
import { Description, Hero, ProductSection } from "../components";
import { productsData } from "../data";
import type { TProduct } from "../data";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

interface IProductProps {
  count: number;
  page: number;
  limit: number;
  skip: number;
  sortKey: string;
  products: Array<TProduct>;
  featured: TProduct;
}

export const getServerSideProps = (async ({ params, query }) => {
  let page = 1;
  if (params?.page) {
    page = Number(params.page);
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
}) satisfies GetServerSideProps;

const HomePage = (props: IProductProps) => {
  const { count, page, limit, skip, sortKey, products, featured } = props;

  const [fetchedProducts, setFetchedProducts] = useState<TProduct[]>([]);

  useEffect(() => {
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
