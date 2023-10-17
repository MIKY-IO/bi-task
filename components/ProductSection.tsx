import Image from "next/image";
import sortIcon from "@/public/pictures/sort.png";
import Product from "@/components/sections/Product";
import SideFilter from "@/components/sections/SideFilter";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { Pagination } from "./ui/Pagination";
import { BsArrowDownUp } from "react-icons/bs";
import { TProduct } from "@/data";
import { useRouter } from "next/router";
import { addKey } from "@/utils/url";

type TProductSectionProps = {
  products: TProduct[];
  count: number;
  page: number;
  limit: number;
  sortKey?: string;
  showMobileFilterCallback: () => void;
};

const ProductSection: React.FC<TProductSectionProps> = (props) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const router = useRouter();
  useEffect(() => {
    setProducts(props.products);
  }, [props]);

  const onArrowClick = () => {
    let url;
    const isNameSort = props.sortKey === "name";
    if (isNameSort) {
      url = addKey(router.query, "sortKey", "price");
    } else {
      url = addKey(router.query, "sortKey", "name");
    }
    router.push(url);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const url = addKey(router.query, "sortKey", e.target.value);
    router.push(url);
  };
  return (
    <section id="products" className="mt-11  w-full">
      <div className="flex justify-between items-center max-container">
        <div className="flex justify-between gap-2">
          <h1 className="lg:text-2xl font-bold md:text-xl">Photography /</h1>
          <h1 className="lg:text-2xl text-[#656565] md:text-xl">
            Premium Photos
          </h1>
        </div>
        <div className="gap-2 flex justify-center items-center">
          <button
            className="md:hidden"
            onClick={props.showMobileFilterCallback}
          >
            <Image src={sortIcon} alt="sort icon" width={20} height={20} />
          </button>
          <ul className="max-lg:hidden flex justify-center items-center gap-2">
            <div onClick={onArrowClick} className="cursor-pointer">
              <BsArrowDownUp />
            </div>
            <h1 className="text-lg text-[#656565]">Sort by</h1>
            <select
              className="text-lg font-bold"
              id="sortKey"
              onChange={handleChange}
            >
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </ul>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="hidden md:w-1/4 md:block">
          <div className="">
            <SideFilter />
          </div>
        </div>
        <div className="w-full md:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-12 ">
          {products?.map((product) => (
            <Product key={product.name} {...product} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Pagination count={props.count} limit={props.limit} page={props.page} />
      </div>
    </section>
  );
};

export default ProductSection;
