/* eslint-disable react/prop-types */
import { MuiColorInput } from "mui-color-input";
import { useState } from "react";

export default function Color({ onChange }) {
  const [value, setValue] = useState("black");

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="color">
      <MuiColorInput format="hex" value={value} onChange={handleChange} />
      <p>Choose Color</p>
    </div>
  );
}
