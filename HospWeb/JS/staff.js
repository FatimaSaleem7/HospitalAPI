const staff_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/staff";

fetch(staff_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#stafftable tbody");
    

     data.forEach(s => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${s.staff_id}</td>
        <td>${s.name}</td>
        <td>${s.role}</td>
        <td>${s.phone}</td>
        <td>${s.email}</td>
	<td>${s.department_id}</td>
        
              `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching staff data:", err);
  });
