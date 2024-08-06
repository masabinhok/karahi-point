import React from "react";

const Select = () => {
  return (
    <div className="relative inline-block w-full text-gray-700">
      <select className="w-full mt-2 p-2 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option value="" >
          Category
        </option>
        <option value="option1">TJ-HOODS</option>
        <option value="option2">TJ-HVAC</option>
        <option value="option3">Cooler/Freezer</option>
        <option value="option4">Plumber</option>
        <option value="option5">Electrician</option>
        <option value="option6">Framing/tbar</option>
        <option value="option7">Furniture</option>
        <option value="option8">Miscellaneous</option>
        <option value="option9">IT</option>
        <option value="option10">Flooring</option>
        <option value="option11">Painting</option>
        <option value="option12">Sign Guy</option>
        <option value="option13">Labour</option>
        <option value="option14">Decor</option>
        <option value="option15">Appliances</option>
        <option value="option16">Bathroom</option>
        <option value="option17">Gas/Hotel/Food</option>
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
