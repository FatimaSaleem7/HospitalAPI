document.getElementById('doctorForm').addEventListener('submit', async function(e) { 
  e.preventDefault();
  
  const doctor_id = document.getElementById('doctor_id').value;
  const name = document.getElementById('name').value;
  const specialization = document.getElementById('specialization').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const department_id = document.getElementById('department_id').value;

  try {
    const res = await fetch('https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/add_doctor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        doctor_id: doctor_id,
        name: name,
        specialization: specialization,
        phone: phone,
        email: email,
        department_id: department_id
      })
    });
    
    if (!res.ok) throw new Error('Failed to add doctor'); 
    
    
    alert("Doctor added successfully!");
  
    document.getElementById('doctorForm').reset();
    
  } catch (err) {
    console.error("Error adding doctor:", err);
    alert("Error adding doctor: " + err.message); 
  }
}); 