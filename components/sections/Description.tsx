import Image from "next/image";
import {
  smallOne,
  smallThree,
  smallTwo,
} from "../../public/pictures/small/index";

const Description: React.FC = () => {
  return (
    <section
      id="description"
      className="flex flex-col mt-6 pb-10 border-b-4 border-b-[#E5E5E5] lg:flex-row lg:gap-40 relative"
    >
      <div className="w-full lg:w-2/3 ">
        <h1 className="font-bold text-lg mb-1">
          About the Samurai King Resting
        </h1>
        <h1 className="font-bold text-lg text-[#656565] mb-2 hidden lg:block">
          Pets
        </h1>
        <div className="text-sm">
          <p className="">
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero s De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero s De Finibus in order to
            provide placeholder
          </p>
          <br />
          <p>
            text to mockup various fonts for a type specimen book.So how did the
            classical Latin become so incoherent? According to McClintock.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 lg:flex lg:flex-col lg:justify-end lg:items-end lg:text-right">
        <div className="mb-4">
          <h1 className="font-bold text-lg mt-4 ">People also buy</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <Image src={smallOne} alt="product1" className="w-full lg:w-auto" />
          <Image src={smallTwo} alt="product2" className="w-full lg:w-auto" />
          <Image src={smallThree} alt="product3" className="w-full lg:w-auto" />
        </div>
        <h1 className="font-bold text-lg mb-4">Details</h1>
        <p className="text-sm mb-2">Size: 1020 X 1020 pixel</p>
        <p className="text-sm">Size: 15 mb</p>
      </div>
    </section>
  );
};

export default Description;
