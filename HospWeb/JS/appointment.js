
const appointment_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/appointment";

fetch(appointment_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#appointmenttable tbody");
    

    data.forEach(a => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${a.appointment_id}</td>
        <td>${a.patient_id}</td>
        <td>${a.doctor_id}</td>
        <td>${a.date}</td>
        <td>${a.time}</td>
        <td>${a.reason}</td>
        <td>${a.status}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching appointment data:", err);
  });