
const bill_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/bill";

fetch(bill_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#billtable tbody");
    

     data.forEach(b => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${b.bill_id}</td>
        <td>${b.patient_id}</td>
        <td>${b.total_amount}</td>
        <td>${b.date}</td>
        <td>${b.payment_status}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching bill data:", err);
  });
