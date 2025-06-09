
const medication_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/medication";

fetch(medication_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#medicationtable tbody");
    

     data.forEach(m => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${m.medication_id}</td>
        <td>${m.name}</td>
        <td>${m.description}</td>
        <td>${m.price}</td>
 	
              `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching medication data:", err);
  });
