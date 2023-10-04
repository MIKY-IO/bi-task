import React from "react";

import { Checkbox } from "@nextui-org/react";

const SideFilter = () => {
  return (
    <section className="border-2 border-blue-400 ">
      <div className="flex-col border-2  text-left">
        <h2 className="text-xl font-bold ">Category</h2>

        <div className="">
          <input type="checkbox" id="myCheckbox" />
          <label
            for="myCheckbox"
            className="custom-checkbox"
            style={{
              width: "1em",
              height: "1em",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          ></label>
          {" Madafaka"}
        </div>
      </div>
    </section>
  );
};

export default SideFilter;
