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
        <h1 className="text-3xl font-bold mb-4 text-white">Monthly Records</h1>
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

  // Calculating totals for all projects and sections
  const totalETransfer = records.reduce(
    (acc, record) => acc + (Number(record.etransfer) || 0),
    0
  );
  const totalTorontoPaid = records.reduce(
    (acc, record) => acc + (record.toronto.paid || 0),
    0
  );
  const totalTorontoRemaining = records.reduce(
    (acc, record) => acc + (record.toronto.remaining || 0),
    0
  );
  const totalHamiltonPaid = records.reduce(
    (acc, record) => acc + (record.hamilton.paid || 0),
    0
  );
  const totalHamiltonRemaining = records.reduce(
    (acc, record) => acc + (record.hamilton.remaining || 0),
    0
  );
  const totalMiscellaneousPaid = records.reduce(
    (acc, record) => acc + (record.miscellaneous.paid || 0),
    0
  );
  const totalMiscellaneousRemaining = records.reduce(
    (acc, record) => acc + (record.miscellaneous.remaining || 0),
    0
  );

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500 bg-white border-separate border-spacing-0 border border-gray-300">
        {/* Table header */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="border border-gray-300 py-3 px-6">Date</th>
            <th className="border border-gray-300 py-3 px-6">E-Transfer</th>
            <th
              colSpan="3"
              className="border border-gray-300 py-3 px-6 text-center"
            >
              Project Toronto
            </th>
            <th
              colSpan="3"
              className="border border-gray-300 py-3 px-6 text-center"
            >
              Project Hamilton
            </th>
            <th
              colSpan="3"
              className="border border-gray-300 py-3 px-6 text-center"
            >
              Miscellaneous
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 py-3 px-6"></th>
            <th className="border border-gray-300 py-3 px-6"></th>
            <th className="border border-gray-300 py-3 px-6">Description</th>
            <th className="border border-gray-300 py-3 px-6">Paid</th>
            <th className="border border-gray-300 py-3 px-6">Remaining</th>
            <th className="border border-gray-300 py-3 px-6">Description</th>
            <th className="border border-gray-300 py-3 px-6">Paid</th>
            <th className="border border-gray-300 py-3 px-6">Remaining</th>
            <th className="border border-gray-300 py-3 px-6">Description</th>
            <th className="border border-gray-300 py-3 px-6">Paid</th>
            <th className="border border-gray-300 py-3 px-6">Remaining</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="border border-gray-300 py-4 px-6">{record.day}</td>
              {/* Project Toronto */}
              <td className="border border-gray-300 py-4 px-6">
                {record.etransfer || "N/A"}
              </td>
              <td className="border border-gray-300 py-4 px-6">
                {record.toronto.description || "N/A"}
              </td>
              <td className="border border-gray-300 py-4 px-6">
                ${record.toronto.paid || "0"}
              </td>
              <td className="border border-gray-300 py-4 px-6">
                ${record.toronto.remaining || "0"}
              </td>

              {/* Project Hamilton */}
              <td className="border border-gray-300 py-4 px-6">
                {record.hamilton.description || "N/A"}
              </td>
              <td className="border border-gray-300 py-4 px-6">
                ${record.hamilton.paid || "0"}
              </td>
              <td className="border border-gray-300 py-4 px-6">
                ${record.hamilton.remaining || "0"}
              </td>

              {/* Miscellaneous */}
              <td className="border border-gray-300 py-4 px-6">
                {record.miscellaneous.description || "N/A"}
              </td>
              <td className="border border-gray-300 py-4 px-6">
                ${record.miscellaneous.paid || "0"}
              </td>
              <td className="border border-gray-300 py-4 px-6">
                ${record.miscellaneous.remaining || "0"}
              </td>
            </tr>
          ))}

          {/* Total Row */}
          <tr className="border-t bg-gray-100">
            <td className="border border-gray-300 py-4 px-6 font-semibold">
              Total
            </td>
            <td className="border border-gray-300 py-4 px-6 font-semibold">
              ${totalETransfer}
            </td>
            <td className="border border-gray-300 py-4 px-6"></td>
            <td className="border border-gray-300 py-4 px-6 font-semibold">
              ${totalTorontoPaid}
            </td>
            <td className="border border-gray-300 py-4 px-6 font-semibold">
              ${totalTorontoRemaining}
            </td>
            <td className="border border-gray-300 py-4 px-6"></td>
            <td className="border border-gray-300 py-4 px-6 font-semibold">
              ${totalHamiltonPaid}
            </td>
            <td className="border border-gray-300 py-4 px-6 font-semibold">
              ${totalHamiltonRemaining}
            </td>
            <td className="border border-gray-300 py-4 px-6"></td>
            <td className="border border-gray-300 py-4 px-6 font-semibold">
              ${totalMiscellaneousPaid}
            </td>
            <td className="border border-gray-300 py-4 px-6 font-semibold">
              ${totalMiscellaneousRemaining}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyRecords;
