
const room_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/room";

fetch(room_link)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data from given URL");
    }
    return response.json();
  })
  .then(data => {
    const tbody = document.querySelector("#roomtable tbody");
    

     data.forEach(r => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${r.room_id}</td>
        <td>${r.room_number}</td>
        <td>${r.type}</td>
        <td>${r.capacity}</td>
        <td>${r.status}</td>
        
              `;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Error fetching room data:", err);
  });
