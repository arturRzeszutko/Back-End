import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

import students from './api/students.js';
app.use('/students', students);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});