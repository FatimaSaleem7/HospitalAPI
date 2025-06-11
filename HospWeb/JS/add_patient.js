document.getElementById('patientForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const patient = {
    patient_id: document.getElementById('patient_id').value,
    name: document.getElementById('name').value,
    gender: document.getElementById('gender').value,
    dob: document.getElementById('dob').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value
  };

  fetch('https://fantastic-memory-q76j44wrjw4r2px9-6000.app.github.dev/add_patient', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(patient)
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerText = data.message;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('result').innerText = 'An error occurred.';
  });
});