import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useStateContext } from "../../context/StateContext";
import { TProduct } from "@/data";

type TProductProps = TProduct;

const Product: React.FC<TProductProps> = ({
  image,
  category,
  name,
  price,
  id,
  bestseller,
}) => {
  const { addToCart } = useStateContext();
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full relative">
      <div className="relative w-[238px] group">
        {bestseller && (
          <div className="absolute text-lg font-semibold top-0 left-0 px-4 h-8 bg-white">
            Best seller
          </div>
        )}
        <div className="aspect-[2/3]">
          <Image
            src={image.src}
            alt="pictures"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="hidden absolute bottom-0 left-0 right-0 group-hover:block">
          <button
            onClick={() =>
              addToCart(
                {
                  id,
                  name,
                  image: image.src,
                  price,
                },
                1
              )
            }
            className="flex justify-center items-center h-11 w-full border text-lg bg-black text-white border-black px-2"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <p className="font-bold text-lg text-[#656565]">{category}</p>
      <p className="font-bold text-2xl">{name}</p>
      <p className="font-bold text-lg text-[#656565]">${price}</p>
    </div>
  );
};

export default Product;
