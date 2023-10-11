import React, { ChangeEvent, useState, useEffect } from "react";
import { Checkbox } from "../ui/Checkbox";
import { addKeyToGroup, removeKeyFromGroup } from "@/utils/url";
import { useRouter } from "next/router";

const SideFilter = () => {
  const router = useRouter();

  const handleChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, checked } = e.target;
    let href;
    if (checked) {
      href = addKeyToGroup(router.query, "category", id);
    } else {
      href = removeKeyFromGroup(router.query, "category", id);
    }
    router.push(href);
  };
  const [selectedCategories, setSelectedCategoris] = useState<string[]>([]);

  useEffect(() => {
    const categories = router.query?.category as string | null | undefined;
    const selectedCategories = categories?.split(",") ?? [];
    setSelectedCategoris(selectedCategories);
  }, [router.query]);

  return (
    <section className="">
      <div className="flex-col text-left space-y-5 pb-10 ">
        <h2 className="text-xl font-bold">Category</h2>.
        <Checkbox
          name="people"
          label="People"
          value={selectedCategories.includes("people")}
          handleChange={handleChangeCallback}
        />
        <Checkbox
          name="premium"
          label="Premium"
          value={selectedCategories.includes("premium")}
          handleChange={handleChangeCallback}
        />
        <Checkbox
          name="pets"
          label="Pets"
          value={selectedCategories.includes("pets")}
          handleChange={handleChangeCallback}
        />
        <Checkbox
          name="food"
          label="Food"
          value={selectedCategories.includes("food")}
          handleChange={handleChangeCallback}
        />
        <Checkbox
          name="landmarks"
          label="Landmarks"
          value={selectedCategories.includes("landmarks")}
          handleChange={handleChangeCallback}
        />
        <Checkbox
          name="cities"
          label="Cities"
          value={selectedCategories.includes("cities")}
          handleChange={handleChangeCallback}
        />
        <Checkbox
          name="nature"
          label="Nature"
          value={selectedCategories.includes("nature")}
          handleChange={handleChangeCallback}
        />
      </div>

      <div className="flex items-center relative">
        <div className="w-5/6 border-b-2 border-b-[#C2C2C2]"></div>
        <div className="w-1/4"></div>
      </div>

      {/* <div className="flex-col text-left space-y-5 pt-6 ">
        <h2 className="text-xl font-bold">Price range</h2>

        <div className="group flex items-center pt-4">
          <input type="checkbox" id="lowerCheckbox" className="hidden" />
          <label
            htmlFor="lowerCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="lowerCheckbox" className="cursor-pointer pl-2">
            Lower than $20
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="20100Checkbox" className="hidden" />
          <label
            htmlFor="20100Checkbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="20100Checkbox" className="cursor-pointer pl-2">
            $20 - $100
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="100200Checkbox" className="hidden" />
          <label
            htmlFor="100200Checkbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="100200Checkbox" className="cursor-pointer pl-2">
            $100 - $200
          </span>
        </div>

        <div className="group flex items-center">
          <input type="checkbox" id="moreCheckbox" className="hidden" />
          <label
            htmlFor="moreCheckbox"
            className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
          ></label>
          <span htmlFor="moreCheckbox" className="cursor-pointer pl-2">
            More than $200
          </span>
        </div>
      </div> */}
    </section>
  );
};

export default SideFilter;
