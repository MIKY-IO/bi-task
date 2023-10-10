import Button from "./ui/Button";
import Image from "next/image";

import { useStateContext } from "../context/StateContext";

const Hero = (props) => {
  const { addToCart } = useStateContext();
  const { featured } = props;

  return (
    <section id="home" className=" mx-auto my-0  relative ">
      <div className="flex justify-center items-center py-6">
        <div className=" flex-1 justify-items-start place-items-start ">
          <h1 className="font-bold text-2xl ">{featured.name}</h1>
        </div>
        <div className="">
          <button
            onClick={() =>
              addToCart(
                {
                  name: featured.name,
                  image: featured.image.src,
                  price: featured.price,
                },
                1
              )
            }
            className="flex justify-center items-center h-11 border text-lg bg-black text-white border-black px-2"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={featured.image?.src}
          alt="dog"
          className="w-full object-cover overflow-hidden h-120"
        />
        <div className="absolute w-44 h-18 bottom-0 left-0 bg-white p-4">
          <p className="justify-center items-center text-center font-bold text-sm">
            Photo of the day
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
