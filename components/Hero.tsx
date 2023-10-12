import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { TProduct } from "@/data";

interface IHeroProps {
  featured: TProduct;
}

const Hero: React.FC<IHeroProps> = (props) => {
  const { addToCart } = useStateContext();
  const { featured } = props;

  return (
    <section
      id="home"
      className=" mx-auto my-0  relative border-t-4 border-t-[#E5E5E5]"
    >
      <div className="flex justify-center items-center py-6 mt-4">
        <div className=" flex-1 justify-items-start place-items-start ">
          <h1 className="font-bold text-2xl ">{featured.name}</h1>
        </div>
        <div className=" hidden md:block">
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
            className=" flex justify-center items-center h-9 border text-lg bg-black text-white border-black px-2 "
          >
            <p className="mx-12 uppercase"> Add To Cart</p>
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={featured.image?.src}
          alt="hero-image"
          className="w-full object-cover overflow-hidden h-120"
        />
        <div className="absolute w-48 h-11 bottom-0 left-0 bg-white p-4">
          <p className="justify-center items-center text-center font-bold text-sm ">
            Photo of the day
          </p>
        </div>
      </div>

      <div className="md:hidden my-8  ">
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
          className=" flex justify-center items-center h-full w-full border text-lg bg-black text-white border-black  "
        >
          <p className="uppercase my-2 "> Add To Cart</p>
        </button>
      </div>
    </section>
  );
};

export default Hero;
