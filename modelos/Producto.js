// cSpell:ignore Matias, observacion
const { Schema, model } = require("mongoose");

const ProductoSchema = Schema({
  producto: {
    type: String,
    required: true,
  },
  observacion: {
    type: String,
  },
});

module.exports = model("Productos", ProductoSchema, "productos");
