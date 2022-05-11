const {request, response} = require("express");
const express = require("express");  // Requerimos el modulo de express
const mongo = require("mongodb").MongoClient;

const app= express(); // Definimos una app de express
app.use(express.json())
const url = "mongodb://localhost:27017";

let db, alumnos
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

app.listen(3006, () => {
    console.log("Escuchando al puerto 3006");
});

