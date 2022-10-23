const express = require("express");
const morgan = require ("morgan");
const app = express();
const env = process.env;
const port = env.PORT || 3000;
app.use(morgan("dev"));
app.listen(port, ()=>{
    console.log("API iniciado en el puerto " + port);
});


app.get("/", (request, response) => {
    response.send("Hola Mundo");
});