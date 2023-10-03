import React from "react";
import Link from "next/link";
import Image from "next/image";

const Products = ({ image, category, name, price }) => {
  return (
    <div>
      {/* <Link href={`/product/${slug.current}`}> */}
      <div className="product-card">
        {/* <Image
            src={data(image && image[0])}
            className="w-[238px] h-[400px]"
          /> */}
        <Image src={image} className="" />
        <p className="text-sm">{category}</p>
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm">${price}</p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Products;
