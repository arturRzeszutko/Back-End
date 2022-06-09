import express from "express";
import sql from 'mssql';

const router = express.Router();

const config = {
  server: '127.0.0.1',
  user: 'admin',
  password: 'admin',
  database: 'university',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true
  }
}

router.get('/get-all', async (req, res) => {
	try{
		let connection = await sql.connect(config);
		const query = "Select * From students"
		let result = await sql.query(query);
		res.status(200).send(result.recordset);

		await connection.close();
	}catch(err){
		console.log(err);
	}
})

router.get('/get-one/:student_id', async (req, res) => {
	try{
    const student_id = req.params.student_id
		let connection = await sql.connect(config);
		const query = `Select * From students Where student_id = ${student_id}`;
		let result = await sql.query(query);
		res.status(200).send(result.recordset);

		await connection.close();
	}catch(err){
		console.log(err);
	}
})

export default router;