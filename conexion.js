const app = require('./app');
const ClienteRutas = require('./rutas/ClienteRutas');
const mongoose = require("mongoose");
const database = "Serviplus"
const username = "admin";
const password = "admin";
const URI = "mongodb+srv://"+username+":"+password+"@serviplus.zxsqqlu.mongodb.net/"+database+"?retryWrites=true&w=majority";
const conectar = async() => {
    try {
        await mongoose.connect(URI);
        console.log("Atlas está en linea");
    } catch (error) {
        console.log("Error en la conexion a Atlas  ${error}");
    }
}
conectar();
module.exports=mongoose;