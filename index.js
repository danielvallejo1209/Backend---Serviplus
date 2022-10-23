//IMPORTACIONES
const express = require("express");
const morgan = require ("morgan");
const cors = require ("cors");
const mongoose = require ("./conexion");
//CONFIGURACIONES
const app = express();
const env = process.env;
const port = env.PORT || 3000;
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//ARRANQUE
app.listen(port, ()=>{
    console.log("API iniciado en el puerto " + port);
});

//RUTAS
app.get("/", (request, response) => {
    response.send("API Serviplus Iniciado");
});
app.use("/clientes", require("./rutas/ClienteRutas"))
app.post("/guardarclientes", require("./rutas/ClienteRutas"))