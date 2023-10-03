import Image from "next/image";
import sortIcon from "../public/pictures/sort.png";
import Products from "./sections/Products";

const ProductSection = () => {
  return (
    <section className="mt-6 border-2 border-red-500 w-full">
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
      <div className="flex justify-between items-center mt-8">
        <div className="w-1/4">sloupec</div>
        <div className="w-3/4">
          <Products />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
