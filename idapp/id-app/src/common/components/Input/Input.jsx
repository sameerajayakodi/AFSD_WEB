import { useState } from "react";

export default function Input({ placeholder, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-4">
      <label
        className={`absolute left-2 top-2 transition-all duration-300 pointer-events-none text-gray-400 ${
          isFocused || value ? "text-xs top-[-10px] left-2 bg-white px-1" : ""
        }`}
      >
        {placeholder}
      </label>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
