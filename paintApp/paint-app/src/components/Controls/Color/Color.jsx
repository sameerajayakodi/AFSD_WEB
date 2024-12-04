/* eslint-disable react/prop-types */
import { MuiColorInput } from "mui-color-input";
import { useState } from "react";

export default function Color({ onChange }) {
  const [value, setValue] = useState("blue");

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="color">
      <MuiColorInput
        style={{
          backgroundColor: "white",
          width: "200px",
          borderRadius: "5px",
        }}
        format="hex"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
