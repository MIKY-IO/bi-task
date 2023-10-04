import React from "react";

const SideFilter = () => {
  return (
    <section className="">
      <div className="flex-col text-left space-y-5 pb-10 ">
        <h2 className="text-xl font-bold">Category</h2>

        <div className="group flex items-center">
          <input type="checkbox" id="peopleCheckbox" className="hidden" />
          <label
            htmlFor="peopleCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="peopleCheckbox" className="cursor-pointer pl-2">
            People
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="premiumCheckbox" className="hidden" />
          <label
            htmlFor="premiumCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="premiumCheckbox" className="cursor-pointer pl-2">
            Premium
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="petsCheckbox" className="hidden" />
          <label
            htmlFor="petsCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="petsCheckbox" className="cursor-pointer pl-2">
            Pets
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="foodCheckbox" className="hidden" />
          <label
            htmlFor="foodCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="foodCheckbox" className="cursor-pointer pl-2">
            Food
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="landmarksCheckbox" className="hidden" />
          <label
            htmlFor="landmarksCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="landmarksCheckbox" className="cursor-pointer pl-2">
            Landmarks
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="citiesCheckbox" className="hidden" />
          <label
            htmlFor="citiesCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="citiesCheckbox" className="cursor-pointer pl-2">
            Cities
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="natureCheckbox" className="hidden" />
          <label
            htmlFor="natureCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="natureCheckbox" className="cursor-pointer pl-2">
            Nature
          </span>
        </div>
      </div>

      <div className="flex items-center relative">
        <div className="w-5/6 border-b-4 border-b-[#E5E5E5]"></div>
        <div className="w-1/4"></div>
      </div>

      <div className="flex-col text-left space-y-5 pt-6">
        <h2 className="text-xl font-bold">Price range</h2>

        <div className="group flex items-center">
          <input type="checkbox" id="peopleCheckbox" className="hidden" />
          <label
            htmlFor="peopleCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="peopleCheckbox" className="cursor-pointer pl-2">
            Lower than $20
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="premiumCheckbox" className="hidden" />
          <label
            htmlFor="premiumCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="premiumCheckbox" className="cursor-pointer pl-2">
            $20 - $100
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="petsCheckbox" className="hidden" />
          <label
            htmlFor="petsCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="petsCheckbox" className="cursor-pointer pl-2">
            $100 - $200
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="foodCheckbox" className="hidden" />
          <label
            htmlFor="foodCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="foodCheckbox" className="cursor-pointer pl-2">
            More than $200
          </span>
        </div>
      </div>
    </section>
  );
};

export default SideFilter;
