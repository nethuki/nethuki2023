// Select necessary elements
const summaryTable = document.getElementById("summaryTable");
const totalPayable = document.getElementById("totalPayable");
const continueBtn = document.getElementById("continueBtn");

// Example data for ticket types and prices
const ticketData = [
  { type: "Adult", price: 10 },
  { type: "Child", price: 5 },
  { type: "Senior", price: 8 },
];

// Function to calculate and update the summary table and total payable
function updateSummaryTable() {
  // Clear previous table rows
  summaryTable.tBodies[0].innerHTML = "";

  let totalPrice = 0;

  // Loop through ticket data and calculate values
  ticketData.forEach((ticket) => {
    const quantity = 0; // Get the quantity for each ticket type (you need to implement this logic)
    const total = quantity * ticket.price;
    totalPrice += total;

    // Create a new table row
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${ticket.type}</td>
      <td>${quantity}</td>
      <td>${ticket.price} USD</td>
      <td>${total} USD</td>
    `;

    // Append the row to the summary table
    summaryTable.tBodies[0].appendChild(row);
  });

  // Update the total payable amount
  totalPayable.textContent = `Total Payable: ${totalPrice} USD`;

  // Enable the continue button if the total price is greater than 0
  continueBtn.disabled = totalPrice === 0;
}

// Call the function initially to display the initial summary
updateSummaryTable();
