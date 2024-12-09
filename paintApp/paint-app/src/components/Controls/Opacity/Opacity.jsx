/* eslint-disable react/prop-types */
import Slider from "@mui/material/Slider";
import "./Opacity.css";
export default function Opacity({ onChange }) {
  const handleOpacityChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue / 100);
    }
  };

  return (
    <div className="opacity">
      <Slider
        style={{
          width: "150px",
        }}
        defaultValue={50}
        aria-label="Opacity"
        valueLabelDisplay="auto"
        onChange={handleOpacityChange}
      />
      <p>Brush Opacity</p>
    </div>
  );
}
