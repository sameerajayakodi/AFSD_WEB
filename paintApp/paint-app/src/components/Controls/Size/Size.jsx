/* eslint-disable react/prop-types */
import Slider from "@mui/material/Slider";
import "./Size.css";
export default function Size({ onChange }) {
  const handleSizeChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="size">
      <Slider
        style={{ width: "150px" }}
        defaultValue={8}
        min={1}
        max={50}
        aria-label="Brush Width"
        valueLabelDisplay="auto"
        onChange={handleSizeChange}
      />
      <p>Brush Width</p>
    </div>
  );
}
