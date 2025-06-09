

const lab_test_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/labtest";

fetch(lab_test_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#lab_testtable tbody");
    

     data.forEach(l => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${l.lab_test_id}</td>
        <td>${l.test_name}</td>
        <td>${l.description}</td>
        <td>${l.price}</td>
              `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching lab_test data:", err);
  });
