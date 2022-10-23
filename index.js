//IMPORTACIONES
const express = require("express");
const morgan = require ("morgan");
const cors = require ("cors");
const mongoose = require ("mongoose");
//CONFIGURACIONES
const app = express();
const env = process.env;
const port = env.PORT || 3000;
app.use(morgan("dev"));
app.use(cors());

//ARRANQUE
app.listen(port, ()=>{
    console.log("API iniciado en el puerto " + port);
});

//RUTAS
app.get("/", (request, response) => {
    response.send("Hola Mundo");
});