import React from "react";
import { useNavigate } from "react-router-dom";
import toronto from "../constants/torontoData";
import hamilton from "../constants/hamiltonData";

const Select = ({ selectKey }) => {
  const navigate = useNavigate();

  // Determine the data source based on selectKey
  let data = [];
  if (selectKey === "toronto") {
    data = toronto;
  } else if (selectKey === "hamilton") {
    data = hamilton;
  }

  const handleSelect = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      navigate(`/data/${selectedCategory}`);
    }
  };

  return (
    <div className="relative inline-block w-full text-gray-700">
      <select
        className="w-full mt-2 p-2 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={handleSelect}
        defaultValue=""
      >
        <option value="" disabled>
          Click here for more details
        </option>
        {data.map((entry) => (
          <option key={entry.category} value={entry.category}>
            {entry.category}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
