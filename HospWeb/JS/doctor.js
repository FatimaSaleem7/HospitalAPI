const doctor_link = "https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/doctor";

fetch(doctor_link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#doctortable tbody");

    data.forEach(c=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${d.doctor_id}</td>
        <td>${d.specialization}</td>
        <td>${d.phone}</td>
	<td>${d.email }</td>
	<td>${d.department_id}</td>
        `;
``
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});


