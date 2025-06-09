const bill_medication_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/bill_medication";

fetch(bill_medication_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#bill_medicationtable tbody");
    

     data.forEach(bm => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${bm.bill_id}</td>
        <td>${bm.medication_id}</td>
        <td>${bm.quantity}</td>
        <td>${bm.cost}</td>
           `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching bill_medication data:", err);
  });
