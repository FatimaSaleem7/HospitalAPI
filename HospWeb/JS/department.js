const department_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/department";

fetch(department_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#departmenttable tbody");
    

     data.forEach(d => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${d.department_id}</td>
        <td>${d.name}</td>
        <td>${d.location}</td>
              `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching department data:", err);
  });
