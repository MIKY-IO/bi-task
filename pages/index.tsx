import SideFilter from "@/components/sections/SideFilter";
import { between } from "@/utils/url";
import { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Description, Hero, ProductSection } from "../components";
import type { TProduct } from "../data/index.js";
import { nameSorter, priceRanges, priceSorter, productsData } from "../data";

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
    (query.category as string)?.length > 0 ? (query.category as string) : null;
  const priceRangeString =
    (query?.priceRange as string)?.length > 0
      ? (query.priceRange as string)
      : null;

  const selectedCategoris = categoryString?.split(",") ?? [];
  const selectedPriceRange = priceRangeString?.split(",") ?? [];

  const hasCategories = selectedCategoris?.length > 0 ? true : false;
  const hasPriceRange = selectedPriceRange?.length > 0 ? true : false;

  const sortKey = String(query.sortKey);

  const sorter = sortKey === "price" ? priceSorter : nameSorter;

  const filteredProductsByCategories = hasCategories
    ? productsData
        .filter((p) => {
          return selectedCategoris.includes(p.category);
        })
        .sort(sorter)
    : productsData.sort(sorter);

  const filteredProductsByPriceRange = hasPriceRange
    ? filteredProductsByCategories.filter((p) => {
        const isInRange = selectedPriceRange.some((rangekey: string) => {
          const min = priceRanges[rangekey].min;
          const max = priceRanges[rangekey].max;
          return between(p.price, min, max);
        });
        return isInRange;
      })
    : filteredProductsByCategories;

  const newProducts = filteredProductsByPriceRange.slice(skip, page * limit);

  let featured = productsData.find((item) => item?.featured);
  if (!featured) {
    featured = productsData[0];
  }
  return {
    props: {
      count: filteredProductsByPriceRange.length,
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
          <div className="block md:hidden top-0 fixed inset-0 bg-white z-50 mt-32 pt-10 overflow-y-auto">
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
