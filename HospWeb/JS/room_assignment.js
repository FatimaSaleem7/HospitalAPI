const room_assignment_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/roomAssignment";

fetch(room_assignment_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#room_assignmenttable tbody");
    

     data.forEach(r => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${r.assignment_id}</td>
        <td>${r.patient_id}</td>
        <td>${r.room_id}</td>
        <td>${r.admit_date}</td>
        <td>${r.discharge_date}</td>
        
              `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching room_assignment data:", err);
  });

