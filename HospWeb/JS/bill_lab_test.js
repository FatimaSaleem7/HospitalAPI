
const bill_lab_test_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/bill_lab_test";

fetch(bill_lab_test_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#bill_lab_testtable tbody");
    

     data.forEach(bl => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${bl.bill_id}</td>
        <td>${bl.lab_test_id}</td>
        <td>${bl.quantity}</td>
        <td>${bl.cost}</td>
           `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching bill_lab_test data:", err);
  });
