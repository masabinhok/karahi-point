import React from "react";
import { useNavigate } from "react-router-dom";

const Select = () => {
  const navigate = useNavigate();

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
          Category
        </option>
        <option value="TJ-HOODS">TJ-HOODS</option>
        <option value="TJ-HVAC">TJ-HVAC</option>
        <option value="Cooler/Freezer">Cooler/Freezer</option>
        <option value="Plumber">Plumber</option>
        <option value="Electrician">Electrician</option>
        <option value="Framing/tbar">Framing/tbar</option>
        <option value="Furniture">Furniture</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="IT">IT</option>
        <option value="Flooring">Flooring</option>
        <option value="Painting">Painting</option>
        <option value="Sign Guy">Sign Guy</option>
        <option value="Labour">Labour</option>
        <option value="Decor">Decor</option>
        <option value="Appliances">Appliances</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Gas/Hotel/Food">Gas/Hotel/Food</option>
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
