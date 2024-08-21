import React from "react";
import { useParams } from "react-router-dom";
import toronto from "../constants/torontoData";
import hamilton from "../constants/hamiltonData";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

const DataTable = () => {
  const { category } = useParams();

  const data = [...toronto, ...hamilton];

  const categoryData = data.find((item) => item.category === category);

  const calculateDue = (cost, paid) => {
    const due = parseFloat(cost) - parseFloat(paid);
    return due < 0 ? 0 : due;
  };

  return (
    <main className="w-full bg-gradient-to-r from-green-400 to-green-800 flex flex-col items-center">
      <Navbar />
      <div className="container mx-auto p-4 mt-36 min-h-screen max-w-[1320px] w-full">
        <h1 className="text-3xl text-center font-bold mb-8 text-white">{category}</h1>
        {categoryData ? (
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full text-sm text-left text-gray-500 bg-white">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="py-3 px-6">Item</th>
                  <th className="py-3 px-6">Date</th>
                  <th className="py-3 px-6">Cost</th>
                  <th className="py-3 px-6">Paid</th>
                  <th className="py-3 px-6">Due</th>
                  <th className="py-3 px-6">Description</th>
                </tr>
              </thead>
              <tbody>
                {categoryData.details.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6">{item.item}</td>
                    <td className="py-4 px-6">{item.date}</td>
                    <td className="py-4 px-6">{item.cost}</td>
                    <td className="py-4 px-6">{item.paid}</td>
                    <td className="py-4 px-6">{calculateDue(item.cost, item.paid)}</td>
                    <td className="py-4 px-6">{item.description}</td>
                  </tr>
                ))}
                <tr className="bg-gray-200 border-t-2 border-gray-300 font-bold">
                  <td className="py-4 px-6">Total</td>
                  <td className="py-4 px-6">-</td>
                  <td className="py-4 px-6">
                    {categoryData.details.reduce(
                      (acc, item) => acc + parseFloat(item.cost),
                      0
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {categoryData.details.reduce(
                      (acc, item) => acc + parseFloat(item.paid),
                      0
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {calculateDue(
                      categoryData.details.reduce(
                        (acc, item) => acc + parseFloat(item.cost),
                        0
                      ),
                      categoryData.details.reduce(
                        (acc, item) => acc + parseFloat(item.paid),
                        0
                      )
                    )}
                  </td>
                  <td className="py-4 px-6">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-white text-center text-lg">No data available for this category.</p>
        )}
      </div>
      <Contact />
    </main>
  );
};

export default DataTable;
