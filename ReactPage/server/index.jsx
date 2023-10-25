const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"negocio"
});

app.post("/create",(req, res)=>{
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const descripcion = req.body.descripcion;

    db.query('INSERT INTO datos(nombre,precio,descripcion) VALUES (?,?,?)', [nombre,precio,descripcion],
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Datos Guardados Correctamente!");
        }
    });
});

app.get("/productos",(req, res)=>{

    db.query('SELECT * FROM datos',
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
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
});

app.listen(3001,()=>{
    console.log("Usando el Puerto: 3001")
})