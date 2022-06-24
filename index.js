import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

//api for database tables
import students from './api/students.js';
app.use('/students', students);

//used port 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});