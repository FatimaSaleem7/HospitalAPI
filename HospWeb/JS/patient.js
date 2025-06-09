const patient_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/patient";

fetch(patient_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#patienttable tbody");
    

     data.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.patient_id}</td>
        <td>${p.name}</td>
        <td>${p.gender}</td>
        <td>${p.dob}</td>
        <td>${p.phone}</td>
        <td>${p.address}</td>

              `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching patient data:", err);
  });

