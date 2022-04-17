require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


//----------MySQL-------------

const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQLPASSWORD,
  database: 'express_testDB'
})



  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected')
    // con.query('CREATE DATABASE express_testDB', function (err, result) {
    //   if (err) throw err;
    //     console.log('database created');
    // });
    const sql = 'CREATE TABLE IF NOT EXISTS users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL)';
    con.query(sql, function (err, result) {
    if (err) throw err;
      console.log('table created')
    })
  })

//---------------------------

const dbtest = function(){
  return new Promise((resolve, reject)=>{
    con.query('SELECT * FROM users', function (error, results, fields) {
      if(error){
        console.log(error);
      }
      resolve(results);
    });
  })
}


//---------------------------


app.get("/", (req, res, next) => {
  console.log('getルーター');
	(async () => {
		const test = await dbtest();
		console.log(`${test} testの中身`);
		res.send(test);
	})()
  .catch(next);
});





app.listen(port, () => console.log(`Example app listening on port ${port}!`))