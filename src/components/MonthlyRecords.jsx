import React, { useState } from "react";
import monthlyData from "../constants/monthlyData"; // Ensure the path is correct

const MonthlyRecords = () => {
  const [selectedMonth, setSelectedMonth] = useState("August");

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-green-800 text-black min-h-screen">
      <div className="p-6 mx-auto shadow-lg rounded-lg w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Monthly Records
        </h1>
        <select
          onChange={handleMonthChange}
          value={selectedMonth}
          className="mb-6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {Object.keys(monthlyData).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <RecordsTable records={monthlyData[selectedMonth]} />
      </div>
    </section>
  );
};

const RecordsTable = ({ records }) => {
  if (!records || !Array.isArray(records)) {
    return (
      <div className="text-red-500">
        No records available for the selected month.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="sticky top-0 bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-left">Day</th>
            <th className="border border-gray-300 p-3 text-left">E-Transfer</th>
            <th colSpan="3" className="border border-gray-300 p-3  text-center">
              Project Toronto
            </th>
            <th colSpan="3" className="border border-gray-300 p-3  text-center">
              Project Hamilton
            </th>
            <th colSpan="3" className="border border-gray-300 p-3  text-center">
              Miscellaneous
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 p-3"></th>
            <th className="border border-gray-300 p-3"></th>
            <th className="border border-gray-300 p-3">Description</th>
            <th className="border border-gray-300 p-3">Paid</th>
            <th className="border border-gray-300 p-3">Remaining</th>
            <th className="border border-gray-300 p-3">Description</th>
            <th className="border border-gray-300 p-3">Paid</th>
            <th className="border border-gray-300 p-3">Remaining</th>
            <th className="border border-gray-300 p-3">Description</th>
            <th className="border border-gray-300 p-3">Paid</th>
            <th className="border border-gray-300 p-3">Remaining</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="border border-gray-300 p-3">{record.day}</td>
              {/* Project Toronto */}
              <td className="border border-gray-300 p-3">
                {record.etransfer || "N/A"}
              </td>
              <td className="border border-gray-300 p-3">
                {record.toronto.description || "N/A"}
              </td>
              <td className="border border-gray-300 p-3">
                ${record.toronto.paid || "0"}
              </td>
              <td className="border border-gray-300 p-3">
                ${record.toronto.remaining || "0"}
              </td>

              {/* Project Hamilton */}
              <td className="border border-gray-300 p-3">
                {record.hamilton.description || "N/A"}
              </td>
              <td className="border border-gray-300 p-3">
                ${record.hamilton.paid || "0"}
              </td>
              <td className="border border-gray-300 p-3">
                ${record.hamilton.remaining || "0"}
              </td>

              {/* Miscellaneous */}
              <td className="border border-gray-300 p-3">
                {record.miscellaneous.description || "N/A"}
              </td>
              <td className="border border-gray-300 p-3">
                ${record.miscellaneous.paid || "0"}
              </td>
              <td className="border border-gray-300 p-3">
                ${record.miscellaneous.remaining || "0"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyRecords;
