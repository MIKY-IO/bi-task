import React from "react";

import { Checkbox } from "@nextui-org/react";

const SideFilter = () => {
  return (
    <section className="border-2 border-blue-400 ">
      <div className="flex-col border-2  text-left">
        <h2 className="text-xl font-bold ">Category</h2>
        <div className="flex gap-1  flex-col ">
          <Checkbox className="" radius="none">
            People
          </Checkbox>
          <Checkbox radius="none">Premium</Checkbox>
          <Checkbox radius="none">Pets</Checkbox>
          <Checkbox radius="none">Food</Checkbox>
          <Checkbox radius="none">Landmark</Checkbox>
          <Checkbox radius="none">Cities</Checkbox>
          <Checkbox radius="none">Nature</Checkbox>
        </div>
      </div>
    </section>
  );
};

export default SideFilter;
