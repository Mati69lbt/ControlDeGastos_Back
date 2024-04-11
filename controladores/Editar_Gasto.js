const Gastos = require("../modelos/Gastos");

// cSpell:ignore parametros
const editar_gasto = async (req, res) => {
  let id_gasto = req.params.id;

  let parametros = req.body;

  try {
    //Buscar y actualizar el articulo
    const gasto_Actualizado = await Gastos.findOneAndUpdate(
      { _id: id_gasto },
      parametros,
      { new: true }
    );

    if (!gasto_Actualizado) {
      return res.status(404).json({
        status: "Error",
        Mensaje: "El gasto no existe en la base de Datos",
      });
    } else {
      res.status(201).json({
        status: "success",
        articulo: gasto_Actualizado,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Faltan datos por enviar",
      error: error.message,
    });
  }
};

module.exports = editar_gasto;
