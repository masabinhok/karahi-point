import React from "react";
import { useParams } from "react-router-dom";
import data from "../constants/torontoData";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

const DataTable = () => {
  const { category } = useParams();

  const categoryData = data.find((item) => item.category === category);

  return (
    <main className="w-full bg-gradient-to-r from-green-400 to-green-800 flex flex-col items-center">
      <Navbar />
      <div className="container mx-auto p-4 mt-36 min-h-screen max-w-[1320px] w-full">
        <h1 className="text-2xl text-center font-bold mb-4">{category}</h1>
        {categoryData ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Item</th>
                <th className="py-2">Date</th>
                <th className="py-2">Cost</th>
                <th className="py-2">Paid</th>
                <th className="py-2">Due</th>
                <th className="py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.details.map((item, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="py-2">{item.item}</td>
                  <td className="py-2">{item.date}</td>
                  <td className="py-2">{item.cost}</td>
                  <td className="py-2">{item.paid}</td>
                  <td className="py-2">{item.cost - item.paid}</td>
                  <td className="py-2">{item.description}</td>
                </tr>
              ))}
              <tr className="text-center border-b">
                <td className="py-2">Total</td>
                <td className="py-2">-</td>
                <td className="py-2">
                  {" "}
                  {categoryData.details.reduce(
                    (acc, item) => acc + parseFloat(item.cost),
                    0
                  )}
                </td>
                <td className="py-2">
                  {categoryData.details.reduce(
                    (acc, item) => acc + parseFloat(item.paid),
                    0
                  )}
                </td>
                <td className="py-2">
                  {categoryData.details.reduce(
                    (acc, item) => acc + parseFloat(item.cost),
                    0
                  ) -
                    categoryData.details.reduce(
                      (acc, item) => acc + parseFloat(item.paid),
                      0
                    )}
                </td>
                <td className="py-2">-</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>No data available for this category.</p>
        )}
      </div>
      <Contact />
    </main>
  );
};

export default DataTable;
