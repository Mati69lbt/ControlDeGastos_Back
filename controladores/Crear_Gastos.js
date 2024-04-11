// cSpell:ignore parametros

const Gastos = require("../modelos/Gastos");

const crear_Gastos = async (req, res) => {
  let parametros = req.body;

  const gasto = new Gastos(parametros)
   try {
     const gastoGuardado = await gasto.save();
     return res.status(200).json({
       status: "success",
       articulo: gastoGuardado,
       mensaje: "Gasto guardado con éxito",
     });
   } catch (error) {
     return res.status(400).json({
       status: "error",
       mensaje: "Error al guardar el Gasto",
       error: error.message,
     });
   }
};

module.exports = crear_Gastos;