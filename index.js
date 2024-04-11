// Importar dependencias
require("dotenv").config();
const connection = require("./database/connection.js");
const express = require("express");
const cors = require("cors");

const puerto = process.env.PORT;

// Mensaje de Bienvenida
console.log("Bienvenido a la API de Control de Gastos");

// Conexión a la Base de Datos
connection();

// Crear servidor node
const app = express();

// Configurar cors
app.use(cors());

// Convertir los datos del body a objetos js
app.use(express.json()); // recibir datos con content-type app/json
app.use(express.urlencoded({ extended: true })); // form-urlencoded

const rutas_gastos = require("./rutas/Gastos.js");

// Cargar configuración de rutas
app.use("/", rutas_gastos);

// Ruta de Prueba
app.get("/ruta-prueba", (req, res) => {
  return res.status(200).json({
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    web: "https://juanperez.com",
    dirección: "Calle Falsa 123",
    ciudad: "Medellín",
    teléfono: "+57123456789",
    correoElectrónico: "juan@perez.com",
    fechaNacimiento: "12/12/1995",
  });
});

// Poner servidor a escuchar peticiones http
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto " + puerto);
});
