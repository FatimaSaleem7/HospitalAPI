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



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully...on PORT ${PORT}`);
});