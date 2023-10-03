import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Products = ({ image, category, name, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("hi");

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full relative">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={image.src} alt="pictures" className="h-[400px] w-[238px]" />

        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 ">
            <Button />
          </div>
        )}
      </div>

      <p className="font-bold text-lg text-[#656565]">{category}</p>
      <p className="font-bold text-2xl">{name}</p>
      <p className="font-bold text-lg text-[#656565]">${price}</p>
    </div>
  );
};

export default Products;
