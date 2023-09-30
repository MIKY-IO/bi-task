import Button from "./ui/Button";
import Dog from "../public/pictures/dog.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className=" mx-auto my-0  p-4 relative ">
      <div className="flex justify-center items-center py-5">
        <div className=" flex-1 justify-items-start place-items-start ">
          <h1 className="font-bold text-lg ">Samurai King Resting</h1>
        </div>
        <div className="">
          <Button className="" />
        </div>
      </div>
      <div className="relative">
        <Image src={Dog} alt="dog" className="" />
        <div class="absolute w-44 h-18 bottom-0 left-0 bg-white p-4">
          <p className="justify-center items-center text-center font-bold text-sm">
            Photo of the day
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
