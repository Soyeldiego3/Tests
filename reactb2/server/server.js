const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin:"*",
    methods:["GET","POST"],
    credentials: true,
})
);
const db = mysql.createConnection({
    host : 'localhost',
    user: "root",
    password: "",
    database: "crud"
})

app.post("/login", (req, res)=> {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("ERROR!");
        if(data.length > 0) {
            return (res.json("Inicio de sesion exitoso!"))
        }else{
            return res.json("Fallo al iniciar sesion!")
        }
    })
})

app.listen(8081, ()=> {
    console.log("Usando el Puerto: 8081");
})