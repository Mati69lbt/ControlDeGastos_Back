// cSpell:ignore parametros

const Producto = require("../../modelos/Producto");

const agregar_Producto = async (req, res) => {
  let parametros = req.body;

  const producto = new Producto(parametros);

  try {
    const productoGuardado = await producto.save();
    return res.status(200).json({
      status: "success",
      producto: productoGuardado,
      message: "Producto guardado con éxito",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Error al guardar el Producto",
      error: error.message,
    });
  }
};
module.exports = agregar_Producto;