const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
         res.json('WELCOME TO HR API');
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/doctor',async(req,res)=>{
    try{
      const result = await pool.query('select * from doctor');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/patient',async(req,res)=>{
    try{
      const result = await pool.query('select * from patient');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/appointment',async(req,res)=>{
    try{
      const result = await pool.query('select * from appointment');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/bill',async(req,res)=>{
    try{
      const result = await pool.query('select * from bill');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/bill_lab_test',async(req,res)=>{
    try{
      const result = await pool.query('select * from bill_lab_test');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/bill_medication',async(req,res)=>{
    try{
      const result = await pool.query('select * from bill_medication');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/department',async(req,res)=>{
    try{
      const result = await pool.query('select * from department');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/labtest',async(req,res)=>{
    try{
      const result = await pool.query('select * from lab_test');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/medical_record',async(req,res)=>{
    try{
      const result = await pool.query('select * from medical_record');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/medication',async(req,res)=>{
    try{
      const result = await pool.query('select * from medication');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});


app.get('/room',async(req,res)=>{
    try{
      const result = await pool.query('select * from room');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});


app.get('/roomAssignment',async(req,res)=>{
    try{
      const result = await pool.query('select * from room_assignment');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});


app.get('/staff',async(req,res)=>{
    try{
      const result = await pool.query('select * from staff');
      res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.post('/add_doctor', async (req, res) => {
  const { doctor_id, name, specialization, phone, email, dept_id } = req.body;

  // Validate required fields
  if (!doctor_id || !name || !specialization || !phone || !email || !dept_id) {
    return res.status(400).json({ 
      success: false,
      message: 'All fields are required' 
    });
  }

  if (!/^\d+$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: 'Phone number should contain only digits'
    });
  }

  if (!email.includes('@')) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  try {
    
    const existingdoctor = await pool.query(
      'SELECT * FROM Doctors WHERE doctor_id = $1', 
      [doctor_id]
    );

    if (existingdoctor.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Doctor ID already exists'
      });
    }

    const departmentExists = await pool.query(
      'SELECT * FROM department WHERE department_id = $1',
      [dept_id]
    );

    if (departmentExists.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Department not found'
      });
    }

    // Insert new doctor
    const insertQuery = `
      INSERT INTO doctors (doctor_id, name, specialization, phone, email, department_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    
    const result = await pool.query(insertQuery, [
      doctor_id, 
      name, 
      specialization, 
      phone, 
      email, 
      dept_id
    ]);

    res.status(201).json({ 
      success: true,
      message: 'Doctor added successfully',
      doctor: result.rows[0] 
    });

  } catch (err) {
    console.error('Error inserting doctor:', err);
    
    
    if (err.code === '23505' && err.constraint === 'doctors_email_key') {
      return res.status(409).json({
        success: false,
        message: 'Email already exists'
      });
    }

    res.status(500).json({ 
      success: false,
      message: 'Failed to add doctor',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

app.post('/add_patient', async (req, res) => {
  const { patient_id, name, gender, dob, phone, address } = req.body;

  if (!patient_id || !name || !gender || !dob || !phone || !address) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const insertQuery = `
      INSERT INTO Patients (patient_id, name, gender, dob, phone, address)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const result = await pool.query(insertQuery, [patient_id, name, gender, dob, phone, address]);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting patient:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully...on PORT ${PORT}`);
});