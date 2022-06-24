import express from "express";
import sql from "mssql";
import { config } from "./../modules/config.mjs";

const router = express.Router();
//end-points for students table
//see all students
router.get('/get-all', async (req, res) => {
	try{
		let connection = await sql.connect(config);
		const getAllQuery = "Select * From students"
		let result = await sql.query(getAllQuery);
		res.status(200).send(result.recordset);

		await connection.close();
	}catch(err){
		console.log(err);
	}
});
//see one selected by id student
router.get('/get-one/:student_id', async (req, res) => {
	try{
    const student_id = req.params.student_id
		let connection = await sql.connect(config);
		const getOneQuery = `Select * From students Where student_id = ${student_id}`;
		let result = await sql.query(getOneQuery);
		res.status(200).send(result.recordset);

		await connection.close();
	}catch(err){
		console.log(err);
	}
});
//add student query
router.post('/add-post', async (req, res) => {
	try {
		const newPostData = req.body;
		console.log(newPostData);
		if(newPostData) {
			let connection = await sql.connect(config);
			const addPostQuery = `insert into dbo.students (surname, first_name, date_of_birth) output inserted.surname, inserted.first_name, inserted.date_of_birth values('${newPostData.surname}', '${newPostData.first_name}', '${newPostData.date_of_birth}')`;
			let result = await sql.query(addPostQuery);
			res.status(200).send(result.recordset);
			connection.close();
		}else {
			const erquestBodyAsString = JSON.stringify(newPostData);
			res.status(400).send(error)
		}
	} catch(err) {
		console.log(err);
	}
});


export default router;