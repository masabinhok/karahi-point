import React, { useState } from "react";
import monthlyData from "../constants/monthlyData"; // Ensure the path is correct

const MonthlyRecords = () => {
  const [selectedMonth, setSelectedMonth] = useState("August");

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-green-800 text-black min-h-screen">
      <div className="p-6 mx-auto shadow-lg rounded-lg w-full max-w-[800px]">
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
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-left">Day</th>
            <th className="border border-gray-300 p-3 text-left">
              Project Toronto
            </th>
            <th className="border border-gray-300 p-3 text-left">
              Project Hamilton
            </th>
            <th className="border border-gray-300 p-3 text-left">
              Miscellaneous
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="border border-gray-300 p-3">{record.day}</td>
              <td className="border border-gray-300 p-3">
                <div>Description: {record.project1.description || "N/A"}</div>
                <div>Paid: ${record.project1.paid || "0"}</div>
                <div>Remaining: ${record.project1.remaining || "0"}</div>
              </td>
              <td className="border border-gray-300 p-3">
                <div>Description: {record.project2.description || "N/A"}</div>
                <div>Paid: ${record.project2.paid || "0"}</div>
                <div>Remaining: ${record.project2.remaining || "0"}</div>
              </td>
              <td className="border border-gray-300 p-3">
                <div>Description: {record.project3.description || "N/A"}</div>
                <div>Paid: ${record.project3.paid || "0"}</div>
                <div>Remaining: ${record.project3.remaining || "0"}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyRecords;
