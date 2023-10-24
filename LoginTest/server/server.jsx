const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
});

app.post('/login', (req, res)=>{
    const user = req.body.email
    const passwd = req.body.password
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";

    db.query(sql,[user,passwd], (err,data)=> {
        if(err) return res.json("Error!");
        if (data.length > 0) {
            return res.json('Incio de sesión Corecto!')

        }else{
            return res.json('Campos Vacios!')
        }
    })
})

app.listen(8081,()=>{
    console.log("Usando el Puerto: 8081")
});

