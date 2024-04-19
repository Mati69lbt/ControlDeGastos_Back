const { Schema, model } = require("mongoose");

const RegistroSchema = Schema({
  mes: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    default: "default.png",
  },
});

module.exports = model("Registro", RegistroSchema, "registros");
