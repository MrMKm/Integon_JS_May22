const {request, response} = require("express");
const express = require("express");  // Requerimos el modulo de express
const mongo = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');

const app= express(); // Definimos una app de express

app.use(express.json()) //Middleware
app.use(cors({
    origin: '*'
}));

const url = "mongodb://localhost:27017";

let db, alumnos, authors, users
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    db = client.db("CursoJS");
    console.log("Conectado a la DB");
    alumnos = db.collection("alumnos");
    authors = db.collection("authors");
    users = db.collection("users");
});


app.get("/demo", (request, response) => {
    console.log("Demo");
    response.status(200).json({ok:true});
});

app.get("/alumnos", (request, response) => {
    console.log("Alumnos");
    alumnos.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }

        response.status(200).json({alumnos:items});
    });
});

app.get("/alumno/:id", (request, response) => {
    console.log("Alumno");
    let alumnoID = request.params.id;
    alumnos.findOne({_id:ObjectId(alumnoID)}, function(err,alumno) {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }

        response.status(200).json({alumno:alumno});
    });
});

app.post("/alumnos", (request, response) => {
    console.log("Insert Alumno");
    alumnos.insertOne(
        {
            name : request.body.name,
            apellido : request.body.apellido,
            ciudad : request.body.ciudad
        },
        (err, result) => {
            if(err){
                console.log(err);
                response.status(500).json({err:err});
                return;
            }
            response.status(200).json({ok:true});
        }
    );
});

app.get("/authors", (request, response) => {
    console.log("Authors");
    authors.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }

        response.status(200).json({authors:items});
    });
});

app.post("/authors", (request, response) => {
    console.log("Insert author");
    console.log(request.body);
    authors.insertOne(
        {
            photo : request.body.photo,
            name : request.body.name,
            email : request.body.email,
            position : request.body.position,
            subPosition : request.body.subPosition,
            status : request.body.status,
            employeeDate : request.body.employeeDate,
        },
        (err, result) => {
            if(err){
                console.log(err);
                response.status(500).json({err:err});
                return;
            }
            response.status(200).json({ok:true});
        }
    );
});

app.get("/users", (request, response) => {
    console.log("Users");
    users.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }

        response.status(200).json({users:items});
    });
});

app.listen(3006, () => {
    console.log("Escuchando al puerto 3006");
});

