import category from "./torontoData";

function calculateTotalCost(data) {
  let totalCost = 0;

  data.forEach((category) => {
    category.details.forEach((detail) => {
      totalCost += detail.cost;
    });
  });

  return totalCost.toFixed(2);
}
function calculateTotalDue(data) {
  const totalCost = calculateTotalCost(category);
  let totalPaid = 0;

  data.forEach((category) => {
    category.details.forEach((detail) => {
      totalPaid += detail.paid;
    });
  });

  return (totalCost - totalPaid).toFixed(2);
}

const totalCost = calculateTotalCost(category);
const totalDue = calculateTotalDue(category);

export { totalCost, totalDue };
