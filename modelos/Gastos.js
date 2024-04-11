// cSpell:ignore Matias, observacion
const { Schema, model } = require("mongoose");

const GastosSchema = Schema({
  fecha: {
    type: Date,
    default: Date.now(),
  },
  lugar: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  pagadoPor: {
    type: String,
    enum: ["Matias", "Carolina"],
    required: true,
  },
  imagen: {
    type: String,
    default: "default.png",
  },
  observacion: {
    type: String,
  },
});

module.exports = model("Gastos", GastosSchema, "gastos");
