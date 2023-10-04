import Image from "next/image";
import sortIcon from "../public/pictures/sort.png";
import { productsData } from "../data";
import Products from "./sections/Products.jsx";
import SideFilter from "./sections/SideFilter";

const ProductSection = () => {
  return (
    <section id="products" className="mt-6 border-2 border-red-500 w-full">
      <div className="flex justify-between items-center max-container">
        <div className="flex justify-between gap-2">
          <h1 className="text-2xl font-bold">Photography /</h1>
          <h1 className="text-2xl text-[#656565] ">Premium Photos</h1>
        </div>
        <div className="gap-2 flex justify-center items-center">
          <a href="" className="lg:hidden ">
            <Image
              src={sortIcon}
              alt="sort icon"
              icons
              width={20}
              height={20}
            />
          </a>
          <ul className="max-lg:hidden flex justify-center items-center gap-2">
            <h1 className="text-lg text-[#656565]">Sort by</h1>
            <h1 className="text-lg font-bold">Price</h1>
          </ul>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="w-1/4 ">
          <div className="">
            <SideFilter />
          </div>
        </div>
        <div className="w-3/4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-12 ">
          {productsData.map((product) => (
            <Products key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
