import { useEffect, useState } from "react";
import { Description, Hero, ProductSection } from "../components";
import { nameSorter, priceSorter, productsData } from "../data";
import type { TProduct } from "../data";
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSidePropsContext,
} from "next";
import { select } from "@nextui-org/react";
import SideFilter from "@/components/sections/SideFilter";
import { RxCross2 } from "react-icons/rx";

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
  if (queryLimit && queryLimit >= 6 && queryLimit <= 12) {
    limit = queryLimit;
  }
  const skip = (page - 1) * limit;

  const categoryString =
    (query.category as string).length > 0 ? (query.category as string) : null;
  const selectedCategoris = categoryString?.split(",") ?? [];

  const hasCategories = selectedCategoris?.length > 0 ? true : false;

  const sortKey = String(query.sortKey);

  const sorter = sortKey === "price" ? priceSorter : nameSorter;
  const filteredProducts = hasCategories
    ? productsData
        .filter((p) => selectedCategoris.includes(p.category))
        .sort(sorter)
    : productsData.sort(sorter);

  const newProducts = filteredProducts.slice(skip, page * limit);

  let featured = productsData.find((item) => item?.featured);
  if (!featured) {
    featured = productsData[0];
  }
  return {
    props: {
      count: filteredProducts.length,
      page: Number(page),
      limit,
      skip,
      sortKey,
      products: newProducts,
      featured,
    },
  };
}

const HomePage = (props: IProductProps) => {
  const { featured } = props;

  const [fetchedProducts, setFetchedProducts] = useState<TProduct[]>([]);
  const [showSideFilter, setShowSideFilter] = useState(false);

  useEffect(() => {
    setFetchedProducts(props.products);
  }, [props]);

  return (
    <main className="mx-auto max-w-screen-xl  h-full">
      {showSideFilter && (
        <div className="block md:hidden">
          <div className="fixed inset-0 z-10 bg-black/40"></div>
          <div className="px-20 block md:hidden top-0 fixed inset-0 bg-white z-50 mt-80 pt-20">
            <div
              className="text-right flex justify-end items-end mt-5 mr-5"
              onClick={() => {
                setShowSideFilter(false);
              }}
            >
              <RxCross2 className="close-cart w-7 h-7 cursor-pointer" />
            </div>
            <SideFilter />
          </div>
        </div>
      )}

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
          sortKey={props.sortKey}
          showMobileFilterCallback={() => setShowSideFilter(true)}
        />
      </section>
    </main>
  );
};

export default HomePage;
