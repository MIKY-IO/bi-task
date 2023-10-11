import React, { useState, ChangeEvent, useEffect } from "react";
interface ICheckboxProps {
  label: string;
  name: string;
  value: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  label,
  name,
  value,
  handleChange,
}) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <div className="group flex items-center">
      <input
        name={name}
        type="checkbox"
        checked={checked}
        id={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setChecked(!checked);
          handleChange(e);
        }}
        className="hidden"
      />
      <label
        htmlFor={name}
        className="custom-checkbox w-5 h-5 bg-white border-2 border-black rounded cursor-pointer group-hover:border-black"
      ></label>
      <span className="pl-2">{label}</span>
    </div>
  );
};
