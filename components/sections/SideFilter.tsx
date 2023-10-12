import React, { ChangeEvent, useState, useEffect } from "react";
import { Checkbox } from "../ui/Checkbox";
import { addKeyToGroup, removeKeyFromGroup } from "@/utils/url";
import { useRouter } from "next/router";

const SideFilter = () => {
  const router = useRouter();

  const handleChangeCategoryCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, checked } = e.target;
    let href;
    if (checked) {
      href = addKeyToGroup(router.query, "category", id);
    } else {
      href = removeKeyFromGroup(router.query, "category", id);
    }
    router.push(href);
  };
  const handleChangePriceCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, checked } = e.target;
    let href;
    if (checked) {
      href = addKeyToGroup(router.query, "priceRange", id);
    } else {
      href = removeKeyFromGroup(router.query, "priceRange", id);
    }
    router.push(href);
  };
  const [selectedCategories, setSelectedCategoris] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);

  useEffect(() => {
    const categories = router.query?.category as string | null | undefined;
    const selectedCategories = categories?.split(",") ?? [];
    setSelectedCategoris(selectedCategories);

    const priceRange = router.query?.priceRange as string | null | undefined;
    const selectedPriceRange = priceRange?.split(",") ?? [];
    setSelectedPriceRange(selectedPriceRange);
  }, [router.query]);

  return (
    <section className="w-full h-full overflow-y-auto px-20">
      <div className="flex-col text-left space-y-5 pb-10 ">
        <h2 className="text-xl font-bold">Category</h2>.
        <Checkbox
          name="people"
          label="People"
          value={selectedCategories.includes("people")}
          handleChange={handleChangeCategoryCallback}
        />
        <Checkbox
          name="premium"
          label="Premium"
          value={selectedCategories.includes("premium")}
          handleChange={handleChangeCategoryCallback}
        />
        <Checkbox
          name="pets"
          label="Pets"
          value={selectedCategories.includes("pets")}
          handleChange={handleChangeCategoryCallback}
        />
        <Checkbox
          name="food"
          label="Food"
          value={selectedCategories.includes("food")}
          handleChange={handleChangeCategoryCallback}
        />
        <Checkbox
          name="landmarks"
          label="Landmarks"
          value={selectedCategories.includes("landmarks")}
          handleChange={handleChangeCategoryCallback}
        />
        <Checkbox
          name="cities"
          label="Cities"
          value={selectedCategories.includes("cities")}
          handleChange={handleChangeCategoryCallback}
        />
        <Checkbox
          name="nature"
          label="Nature"
          value={selectedCategories.includes("nature")}
          handleChange={handleChangeCategoryCallback}
        />
      </div>

      <div className="flex items-center relative">
        <div className="w-5/6 border-b-2 border-b-[#C2C2C2]"></div>
        <div className="w-1/4"></div>
      </div>

      <div className="flex-col text-left space-y-5 pt-6 ">
        <h2 className="text-xl font-bold">Price range</h2>

        <Checkbox
          name="price1"
          label="Lower than $20"
          value={selectedPriceRange.includes("price1")}
          handleChange={handleChangePriceCallback}
        />
        <Checkbox
          name="price2"
          label="$20 - $100"
          value={selectedPriceRange.includes("price2")}
          handleChange={handleChangePriceCallback}
        />
        <Checkbox
          name="price3"
          label="$100 - $200"
          value={selectedPriceRange.includes("price3")}
          handleChange={handleChangePriceCallback}
        />
        <Checkbox
          name="price4"
          label="More than $200"
          value={selectedPriceRange.includes("price4")}
          handleChange={handleChangePriceCallback}
        />
      </div>
    </section>
  );
};

export default SideFilter;
