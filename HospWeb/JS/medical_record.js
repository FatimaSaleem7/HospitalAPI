const medical_record_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/medical_record";

fetch(medical_record_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#medical_recordtable tbody");
    

     data.forEach(mr => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${mr.record_id}</td>
        <td>${mr.patient_id}</td>
        <td>${mr.doctor_id}</td>
        <td>${mr.diagnosis}</td>
 	   <td>${mr.treatment}</td>
 	    <td>${mr.date}</td>

              `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching medical_record data:", err);
  });
