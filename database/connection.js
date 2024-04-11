const mongoose = require("mongoose");
const mongodbUri = process.env.MONGODB_URI;

const connection = async () => {
  try {
    await mongoose.connect(mongodbUri);
    console.log(
      "Conectado Exitosamente a la Base de Datos del Control de Gastos!!!"
    );
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo conectar a la Base de Datos");
  }
};

module.exports = connection;
